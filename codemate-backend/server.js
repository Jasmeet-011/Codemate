const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

// Define a schema and model for questions and responses
const historySchema = new mongoose.Schema({
  question: { type: String, required: true },
  response: { type: String, required: true },
  language: { type: String, default: "English" }, // Store language
  date: { type: Date, default: Date.now },
});

const History = mongoose.model("History", historySchema);

// Initialize GoogleGenerativeAI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Endpoint for querying the API
app.post("/api/query", async (req, res) => {
  const { question, language = "English" } = req.body; // Default to English if language not provided

  if (!question || question.trim() === "") {
    return res.status(400).json({ error: "Question cannot be empty." });
  }

  try {
    // Load the Gemini model
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Append language to the question
    const formattedQuestion = `${question} in ${language}`;

    // Generate content using the formatted question
    const result = await model.generateContent(formattedQuestion);

    // Extract the solution
    const solution =
      result?.response?.text?.() || "No solution provided by API.";

    // Save question, response, and language to MongoDB
    const history = new History({
      question: formattedQuestion,
      response: solution,
      language,
    });
    await history.save();

    // Send the solution back to the frontend
    res.status(200).json({ solution });
  } catch (error) {
    console.error("Error from Gemini API:", error.message || error);

    // Handle error gracefully
    res
      .status(500)
      .json({ error: "Failed to fetch solution. Please try again later." });
  }
});

// Endpoint to fetch all history
app.get("/api/history", async (req, res) => {
  try {
    const history = await History.find().sort({ date: -1 });
    res.status(200).json(history);
  } catch (error) {
    console.error("Error fetching history:", error.message || error);
    res.status(500).json({ error: "Failed to fetch history." });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
