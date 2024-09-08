import React from "react";
import "./Button.css";
const Button = ({ text, onClick, blue, disabled }) => {
  return (
    <div onClick={onClick} disabled={disabled} className={blue ? "btn btn-blue" : "btn"}>
      {text}
    </div>
  );
};

export default Button;
