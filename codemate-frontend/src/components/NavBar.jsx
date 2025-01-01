import React from "react";
import { Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";

const NavBar = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        background: isDarkMode ? "#333" : "#f0f0f0",
        color: isDarkMode ? "#fff" : "#222",
        borderBottom: isDarkMode ? "1px solid #555" : "1px solid #ccc",
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: isDarkMode ? "#fff" : "#007BFF",
          fontSize: "1.2rem",
          fontWeight: "bold",
        }}
      >
        Home
      </Link>
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <Link
          to="/history"
          style={{
            textDecoration: "none",
            color: isDarkMode ? "#fff" : "#007BFF",
            fontSize: "1.2rem",
            fontWeight: "bold",
          }}
        >
          History
        </Link>
        <button
          onClick={toggleDarkMode}
          style={{
            background: "transparent",
            border: "none",
            fontSize: "1.5rem",
            cursor: "pointer",
            color: isDarkMode ? "#fff" : "#222",
          }}
        >
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
