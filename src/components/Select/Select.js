import React from "react";
import { InputLabel, FormControl, Select } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";

import "./Select.css";

const CustomSelect = ({ options, label, id, name, value, onChange }) => {
  return (
    <div className="m-top-2">
      <InputLabel id={id} className={"select-label"}>
        {label}
      </InputLabel>
      <FormControl variant="outlined">
        <Select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          label={label}
          defaultValue=""
          className={"select-content"}
        >
          <MenuItem value="">
            <em>Nada</em>
          </MenuItem>
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default CustomSelect;
