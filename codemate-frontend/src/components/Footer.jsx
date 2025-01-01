import React from "react";

const Footer = () => (
  <footer
    style={{
      marginTop: "50px",
      padding: "20px 0",
      textAlign: "center",
      backgroundColor: "#007bff",
      color: "white",
      fontSize: "0.9rem",
    }}
  >
    <p>© {new Date().getFullYear()} CodeMate. All Rights Reserved.</p>
  </footer>
);

export default Footer;
