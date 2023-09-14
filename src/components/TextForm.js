import React, { useState } from "react";
// import styled from "styled-components";
import "./TextForm.css";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text is Clear", "success");
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Spoken Successfully...", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // const handleBClick = () => {
  //   //   console.log("Bold was Clicked");
  //   //   // let newText = <BoldText>text</BoldText>;
  //   //   // let newText = bold(text);
  //   //   // setText(newText);
  // };

  const [Bstyle, setBstyle] = useState({
    fontWeight: "normal",
    fontStyle: "normal",
    textDecorationLine: "none",
  });

  const toggleBStyle = () => {
    setBstyle({
      ...Bstyle,
      fontWeight: "bold",
    });
    props.showAlert("Converted to Bold Letters", "success");
  };

  const toggleIStyle = () => {
    console.log(Bstyle);
    setBstyle({
      ...Bstyle,
      fontStyle: "italic",
    });
    props.showAlert("Converted to Italic", "success");
  };

  const toggleUnderlineStyle = () => {
    setBstyle({
      ...Bstyle,
      textDecorationLine: "Underline",
    });
    props.showAlert("underLine in text", "success");
  };

  const [text, setText] = useState("");
  // setText("New Text");
  return (
    <dic style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            style={{
              ...Bstyle,
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="my-Box"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>
          LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear
        </button>
        <button type="submit" className="btn btn-primary mx-2" onClick={speak}>
          Speak
        </button>

        <button onClick={toggleBStyle} className="btn btn-primary mx-1">
          Bold
        </button>

        <button onClick={toggleIStyle} className="btn btn-primary mx-1">
          I
        </button>
        <button onClick={toggleUnderlineStyle} className="btn btn-primary mx-1">
          U
        </button>
      </div>

      <div
        className="container my-2"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your Summary Here...</h2>
        <p>
          {text.split(" ").length} words & {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to Read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </dic>
  );
}
