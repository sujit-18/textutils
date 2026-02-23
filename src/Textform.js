import React from "react";

export default function Textform() {

    const [text , setText] = React.useState("");
    const handleuppercase = () => {
        let newtext = text.toLocaleUpperCase();
        setText(newtext);
    }

    // for uppercase and lowercase we can also write like this
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handlelowercase = () => {
        let newtext = text.toLocaleLowerCase();
        setText(newtext);
    }

    return (
         <>
      <h3>Enter your text here</h3>

      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          rows="8"
          placeholder="Enter your text here..."
        ></textarea>
      </div>

      <button className="btn btn-primary" onClick={handleuppercase}>
        Convert to Uppercase
      </button>
      <button className="btn btn-success mx-2" onClick={() => setText(text.toLocaleLowerCase())}>
        Convert to Lowercase
      </button>
      <button className="btn btn-secondary mx-2" onClick={() => setText("")}>
        Clear Text
      </button>
    </>
    )
}