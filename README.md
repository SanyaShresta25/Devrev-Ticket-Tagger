# 🏷️ DevRev Ticket Tagger

A simple Node.js tool that classifies and tags DevRev tickets using basic NLP techniques (TF-IDF) and the DevRev API. Useful for automating ticket management workflows like categorizing bugs, feature requests, and more.

---

## ✨ Features

* Classifies incoming tickets using TF-IDF text similarity
* Automatically tags tickets on DevRev via REST API
* Reasoning is generated for each tag assignment
* Secure API key usage via `.env`

---

## 🛠️ Tech Stack

* Node.js
* TypeScript
* Axios
* Natural (NLP Library)
* dotenv

---

## 📁 Project Structure

```
devrev-ticket-tagger/
├── index.ts             # Main classification and tagging logic
├── .env                 # Contains DEVREV_API_KEY (not committed)
├── package.json         # Dependencies and scripts
```

---

## 🔧 Setup Instructions

1. Clone the repository
2. Run `npm install`
3. Create a `.env` file and add your API key:

```
DEVREV_API_KEY=your_devrev_api_key_here
```

4. Run the script:

```bash
npx ts-node index.ts
```

---

## 🔄 Example Usage

```ts
const ticketId = "12345";
const ticketContent = "Feature request to add dark mode";
await classifyAndTag(ticketId, ticketContent);
```

---

## ✅ License

This project is licensed under the [MIT License](LICENSE).

---

## 👩‍💻 Author

**Sanya Shresta Jathanna**

* **Portfolio** – [Sanya Shresta Jathanna](https://sanyashresta.netlify.app/)
* **GitHub** – [@SanyaShresta25](https://github.com/SanyaShresta25)
