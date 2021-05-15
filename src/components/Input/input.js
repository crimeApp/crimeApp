import React from "react";
import "./input.css";

const Input = ({ label, children, error, type, size, spacing }) => {
  return (
    <div className={`input-container ${size}`}>
       <label className={`input-label ${spacing}`}>{label}</label>
      <input className={`input-content ${error? 'error' : ''}`} type={type}  />
    </div>
  );
};

export default Input;
