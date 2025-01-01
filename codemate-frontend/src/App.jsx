import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomePage from "./Pages/HomePage";
import HistoryPage from "./Pages/HistoryPage";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [history, setHistory] = useState([]); // For storing the history of questions and responses
  const [loading, setLoading] = useState(false); // Loading state for the submit button
  const [response, setResponse] = useState(""); // Response from the backend

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  // Function to handle API requests
  const handleSubmit = async (question) => {
    setLoading(true); // Set loading state
    setResponse(""); // Clear any previous response

    try {
      // Make a POST request to the backend
      const res = await fetch("http://localhost:5000/api/query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }), // Send the question as the body
      });

      if (!res.ok) {
        throw new Error("Failed to fetch solution from the server.");
      }

      const data = await res.json(); // Parse the JSON response
      setResponse(data.solution); // Update the response state

      // Update the history state
      setHistory((prevHistory) => [
        { question, response: data.solution },
        ...prevHistory,
      ]);
    } catch (error) {
      console.error("Error fetching solution:", error.message);
      setResponse("Error fetching the solution. Please try again.");
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              isDarkMode={isDarkMode}
              toggleDarkMode={toggleDarkMode}
              handleSubmit={handleSubmit}
              loading={loading}
              response={response}
              setHistory={setHistory}
            />
          }
        />
        <Route
          path="/history"
          element={<HistoryPage history={history} isDarkMode={isDarkMode} />}
        />
      </Routes>
    </div>
  );
}

export default App;
