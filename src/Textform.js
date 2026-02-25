import React from "react";

export default function Textform() {

  const [text, setText] = React.useState("");
  const [copied, setCopied] = React.useState(false);

  const handleUppercase = () => {
    setText(text.toUpperCase());
  };

  const handleLowercase = () => {
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
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleRemoveSpaces = () => {
    setText(text.trim().split(/\s+/).join(" "));
  };

  const handleReverse = () => {
    setText(text.split("").reverse().join(""));
  };

  const wordCount =
    text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  const readingTime = (0.008 * wordCount).toFixed(2);

  return (
    <div className="container my-5">

      <div className="card shadow-lg p-4">

        <h2 className="text-center mb-4">Text Utility Tool</h2>

        <textarea
          className="form-control mb-3"
          value={text}
          onChange={handleOnChange}
          rows="6"
          placeholder="Enter your text here..."
        ></textarea>

        <div className="mb-3 d-flex flex-wrap gap-2">

          <button
            className="btn btn-primary"
            onClick={handleUppercase}
            disabled={!text}
          >
            Uppercase
          </button>

          <button
            className="btn btn-success"
            onClick={handleLowercase}
            disabled={!text}
          >
            Lowercase
          </button>

          <button
            className="btn btn-warning"
            onClick={handleRemoveSpaces}
            disabled={!text}
          >
            Remove Extra Spaces
          </button>

          <button
            className="btn btn-dark"
            onClick={handleReverse}
            disabled={!text}
          >
            Reverse Text
          </button>

          <button
            className="btn btn-info"
            onClick={handleCopy}
            disabled={!text}
          >
            Copy
          </button>

          <button
            className="btn btn-danger"
            onClick={handleClear}
            disabled={!text}
          >
            Clear
          </button>

        </div>

        {copied && (
          <div className="alert alert-success py-2">
            Text Copied Successfully!
          </div>
        )}

        <hr />

        {/* Summary Section */}
        <h4>Text Summary</h4>
        <p>
          <strong>{wordCount}</strong> words and{" "}
          <strong>{text.length}</strong> characters
        </p>
        <p>
          Estimated Reading Time: <strong>{readingTime}</strong> minutes
        </p>

        <hr />

        {/* Preview Section */}
        <h4>Preview</h4>
        <div className="p-3 border rounded bg-light">
          {text.length > 0 ? text : "Nothing to preview..."}
        </div>

      </div>
    </div>
  );
}