import React from "react";

const QuestionForm = ({ question, setQuestion, handleSubmit, loading, language, setLanguage }) => {
  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="Ask your coding question..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        style={{
          width: "80%",
          height: "100px",
          margin: "10px 0",
          padding: "10px",
          fontSize: "16px",
        }}
        required
      />
      <br />
      <label>
        Select Language:
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          style={{ marginLeft: "10px", padding: "5px", fontSize: "16px" }}
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="cpp">C++</option>
        </select>
      </label>
      <br />
      <button
        type="submit"
        disabled={loading}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: loading ? "not-allowed" : "pointer",
          background: loading ? "#ccc" : "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          marginTop: "10px",
        }}
      >
        {loading ? "Loading..." : "Get Solution"}
      </button>
    </form>
  );
};

export default QuestionForm;
