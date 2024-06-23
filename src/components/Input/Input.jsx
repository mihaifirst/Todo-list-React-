import React from "react";
import "./Input.scss";

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="What is the task today" />
      <button>Add</button>
    </div>
  );
};

export default Input;
