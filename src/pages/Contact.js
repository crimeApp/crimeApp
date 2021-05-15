import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import CustomSwitch from "../components/Switch";
import InputSlider from "../components/Slider";

export default function Contact() {
  const [value, setValue] = useState(30);

  const handleSliderChange = (newValue) => {
    setValue(newValue);
  };
  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleBlur = (value) => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };
  return (
    <Grid container direction="column" justify="center" spacing={2}>
      <Grid item>
        <CustomSwitch labelText="Fue atacado?" />
      </Grid>

      <Grid item>
        <InputSlider
          label="label"
          value={value}
          handleSliderChange={handleSliderChange}
          handleInputChange={handleInputChange}
          handleBlur={handleBlur(value)}
        />
      </Grid>
    </Grid>
  );
}
