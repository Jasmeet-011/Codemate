import React, { useState } from "react";
import NavBar from "../components/NavBar";
import QuestionForm from "../components/QuestionForm";
import ResponseContainer from "../components/ResponseContainer";
import Footer from "../components/Footer"; // Import Footer

const HomePage = ({ isDarkMode, toggleDarkMode, setHistory }) => {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate input
    if (!question.trim()) {
      setError("Please enter a question.");
      return;
    }

    setLoading(true);
    setError(null);
    setResponse("");

    try {
      const res = await fetch("http://localhost:5000/api/query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: `${question} in ${language}`,
          language,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to fetch response");
      }

      if (data.solution) {
        setResponse(data.solution);

        // Update history with a timestamp
        const newEntry = {
          id: Date.now(), // Add unique identifier
          question,
          response: data.solution,
          language,
          date: new Date().toISOString(),
        };

        setHistory((prev) => [newEntry, ...prev]); // Add new entries at the start
      } else {
        throw new Error("No solution provided.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError(error.message || "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <NavBar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">CodeMate</h1>

        {error && (
          <div
            className="text-red-500 text-center mb-4"
            role="alert"
            aria-live="polite"
          >
            {error}
          </div>
        )}

        <QuestionForm
          question={question}
          setQuestion={setQuestion}
          handleSubmit={handleSubmit}
          loading={loading}
          language={language}
          setLanguage={setLanguage}
          disabled={loading}
        />

        {response && (
          <ResponseContainer
            response={response}
            isDarkMode={isDarkMode}
            language={language}
          />
        )}
      </main>
      <Footer /> {/* Add Footer here */}
    </div>
  );
};

export default HomePage;
