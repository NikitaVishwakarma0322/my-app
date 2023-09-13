import React, { useState } from "react";
// import styled from "styled-components";
import "./TextForm.css";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
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
  });
  const toggleBStyle = () => {
    if (text.fontWeight === "normal") {
      setBstyle({
        fontWeight: "normal",
      });
    } else {
      setBstyle({
        fontWeight: "bold",
      });
    }
  };

  const [Istyle, setIstyle] = useState({
    fontStyle: "normal",
  });
  const toggleIStyle = () => {
    if (text.fontStyle === "normal") {
      setIstyle({
        fontStyle: "italic",
        color: "red",
      });
    } else {
      setIstyle({
        fontStyle: "italic",
        color: "blue",
      });
    }
  };

  const handleUClick = () => {
    console.log();
  };

  const [text, setText] = useState("");
  // setText("New Text");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            style={{ ...Bstyle, ...Istyle }}
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

        <button onclick={toggleIStyle} className="btn btn-primary mx-1">
          I
        </button>
        <button className="btn btn-primary mx-1" onClick={handleUClick}>
          U
        </button>
      </div>

      <div className="container my-2">
        <h2>Your Summary Here...</h2>
        <p>
          {text.split(" ").length} words & {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to Read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
