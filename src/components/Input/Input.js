import React from "react";
import "./input.css";
import { TextField, InputLabel } from "@material-ui/core";

const Input = ({
  label,
  name,
  value,
  onChange,
  type
}) => {
  return (
    <div className="m-top-3">
      <InputLabel className={"input-label"}>{label}</InputLabel>
      <TextField
        defaultValue="Default Value"
        variant="outlined"
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className={"input-content"}
      />
    </div>
  );
};

export default Input;
