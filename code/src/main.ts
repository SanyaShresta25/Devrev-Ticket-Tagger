import axios from "axios";
import * as dotenv from "dotenv";
import { TfIdf, WordTokenizer } from "natural";

dotenv.config(); // Load API key from .env file

// Set up the tokenizer and TfIdf
const tokenizer = new WordTokenizer();
const tfidf = new TfIdf();

const DEVREV_API_URL = "https://api.devrev.ai"; // Base API URL

// Function to tag a ticket using the API
const tagTicket = async (ticketId: string, tags: string[], reasoning: string) => {
  try {
    const response = await axios.post(
      `${DEVREV_API_URL}/tickets/tag`,
      {
        ticketId,
        tags,
        reasoning,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.DEVREV_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(`Ticket ${ticketId} tagged successfully:`, response.data);
  } catch (error) {
    console.error(`Error tagging ticket ${ticketId}:`, error.response?.data || error.message);
  }
};

// Analyze and classify tickets
const classifyAndTag = async (ticketId: string, ticketContent: string) => {
  // Analyze ticket (basic example)
  let bestMatch = "";
  let bestScore = -1;

  const trainingData = [
    { text: "Request for new feature", type: "feature request" },
    { text: "Bug in the login page", type: "bug report" },
  ];

  trainingData.forEach((ticket, index) => {
    tfidf.addDocument(ticket.text);
    const score = tfidf.tfidf(ticketContent, index);
    if (score > bestScore) {
      bestScore = score;
      bestMatch = ticket.type;
    }
  });

  const reasoning = `Ticket classified as '${bestMatch}' based on text similarity.`;
  await tagTicket(ticketId, [bestMatch], reasoning);
};

// Example usage
(async () => {
  const ticketId = "12345"; // Example ticket ID
  const ticketContent = "Feature request to add dark mode";
  await classifyAndTag(ticketId, ticketContent);
})();
