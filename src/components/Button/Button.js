import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./button.css";
const Button = ({ button1, button2 }) => {
  const openSignInPopup = window.clickJoinUsCallback;

  return (
    <div className="button-container">
      <a href="https://client.cfdpro.com/">
        <button className="button1">{button1}</button>
      </a>
      <a href="https://client.cfdpro.com/register" className="button2">
        {button2}
      </a>
    </div>
  );
};

export default Button;
