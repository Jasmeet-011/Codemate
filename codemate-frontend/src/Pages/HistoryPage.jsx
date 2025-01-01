import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HistoryPage = ({ isDarkMode }) => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    // Fetch history from the backend
    const fetchHistory = async () => {
      try {
        const res = await fetch("https://codemate-ub8x.onrender.com/api/history");
        const data = await res.json();
        setHistory(data);
      } catch (error) {
        console.error("Error fetching history:", error);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>History</h1>
        <Link to="/" style={{ textDecoration: "none", color: isDarkMode ? "#fff" : "#007BFF" }}>
          Go Back to Home
        </Link>
        <ul style={{ marginTop: "20px", listStyleType: "none", padding: "0" }}>
          {history.length > 0 ? (
            history.map((item, index) => (
              <li
                key={index}
                style={{
                  marginBottom: "15px",
                  background: isDarkMode ? "#333" : "#f9f9f9",
                  padding: "10px",
                  borderRadius: "5px",
                  maxWidth: "70%",
                  margin: "auto",
                  textAlign: "left",
                }}
              >
                <p>
                  <strong>Question:</strong> {item.question}
                </p>
                <p>
                  <strong>Response:</strong> {item.response}
                </p>
                <p style={{ fontSize: "0.8rem", color: isDarkMode ? "#aaa" : "#555" }}>
                  {new Date(item.date).toLocaleString()}
                </p>
              </li>
            ))
          ) : (
            <p>No history available.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default HistoryPage;
