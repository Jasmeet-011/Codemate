import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark, coy } from "react-syntax-highlighter/dist/esm/styles/prism";

const ResponseContainer = ({ response, isDarkMode, language }) => {
  console.log("Received response in ResponseContainer:", response); // Debug log

  const formatResponse = (text) => {
    if (!text) return <p>No response available.</p>;

    const lines = text.split("\n\n");
    return lines.map((line, index) => {
      if (line.trim().startsWith("```")) {
        const languageRegex = /^```(\w+)?/;
        const match = line.match(languageRegex);
        const lang = match && match[1] ? match[1] : language;
        const code = line.replace(languageRegex, "").trim();

        return (
          <SyntaxHighlighter
            key={index}
            language={lang || "javascript"}
            style={isDarkMode ? dark : coy}
          >
            {code}
          </SyntaxHighlighter>
        );
      }
      return <p key={index}>{line}</p>;
    });
  };

  return (
    <div
      className="response-container"
      style={{
        marginTop: "20px",
        background: isDarkMode ? "#333" : "#f9f9f9",
        padding: "15px",
        borderRadius: "5px",
        maxWidth: "70%",
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "left",
        lineHeight: "1.6",
      }}
    >
      <h2>Response:</h2>
      {formatResponse(response)}
    </div>
  );
};

export default ResponseContainer;
