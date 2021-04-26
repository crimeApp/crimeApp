import React from 'react';
import { Grid, Slider, Input } from '@material-ui/core';

import "./Slider.css";

//Código a usar cuando se usa el elemento
/* const [value, setValue] = useState(30);

  const handleSliderChange = (newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  }; */

export default function InputSlider({ label, value, handleBlur, handleInputChange, handleSliderChange }) {

  return (
    <>
      <label id="input-slider">
        {label}
      </label>

      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={6}>
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
          />
        </Grid>

        <Grid item>
          <Input
            value={value}
            margin="dense"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 10,
              min: 0,
              max: 100,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}
