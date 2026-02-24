import React from "react";

export default function Textform() {

  const [text, setText] = React.useState("");

  const handleuppercase = () => {
    setText(text.toUpperCase());
  };

  const handlelowercase = () => {
    setText(text.toLowerCase());
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleClear = () => {
    setText("");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    alert("Text Copied!");
  };

  const wordCount =
    text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  return (
    <div className="container my-5">

      <h2 className="text-center mb-4">Enter your text here</h2>

      <div className="d-flex justify-content-center">
        <div style={{ width: "70%" }}>
          
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            rows="8"
            placeholder="Enter your text here..."
          ></textarea>

          <div className="mt-3">

            <button
              className="btn btn-primary me-2"
              onClick={handleuppercase}
            >
              Convert to Uppercase
            </button>

            <button
              className="btn btn-success me-2"
              onClick={handlelowercase}
            >
              Convert to Lowercase
            </button>

            <button
              className="btn btn-secondary me-2"
              onClick={handleClear}
            >
              Clear Text
            </button>

            <button
              className="btn btn-info"
              onClick={handleCopy}
            >
              Copy Text
            </button>

          </div>
        </div>
      </div>

      <h4 className="ms-4 mt-4">
        Count Words And Characters: {wordCount} words and {text.length} characters
      </h4>

    </div>
  );
}