import React from "react";
import "./input.css";
import { Grid, GridSize, TextField, TextFieldProps } from '@material-ui/core';


interface InputProps {
  xs?: GridSize;
  sm?: GridSize;
  md?: GridSize;
  xl?: GridSize;
  lg?: GridSize;
  className?: string;
  textFieldParams?: TextFieldProps;
  label?: string;
  name?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  helper?: string;
  type?: string;
  error?: boolean;
  errorMessage?: string;
  style?: React.CSSProperties;
}

const Input = ({
  xs,
  sm,
  md,
  xl, lg, 
  className, 
  label, 
  name, 
  value, 
  onChange, 
  textFieldParams,
  errorMessage,
  type,
  helper,
  style,
  error, }: InputProps) => {

  return <Grid item xs={xs} sm={sm} md={md} xl={xl} lg={lg} className="m-top-2">
    <TextField
      error={error}
      name={name}
      type={type}
      className={className}
      helperText={error ? <p>{errorMessage}</p> : <p>{helper}</p>}
      value={value}
      onChange={onChange}
      label={label}
      variant="outlined"
      style={{
        width: "100%",
        ...style
      }}
      {...textFieldParams}
    />
  </Grid>
}

export default Input;