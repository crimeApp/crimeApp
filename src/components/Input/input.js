import React from "react";
import "./input.css";

const Input = ({ label, children, required, classname, type, ...otherProps }) => {
  return (
    <div className="col-md container-input">
      <div className="input-label">
        <h5>{label}</h5>
      </div>
      <div className="col">
        <div className="row">
          <input className={`input-content ${classname}`} type={type} {...otherProps} />
        </div>
      </div>
    </div>
  );
};

export default Input;
