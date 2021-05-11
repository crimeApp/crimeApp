import React from "react";
import traslate from "../../../assets/traslate/es.json";
import { validatePersonalDetails } from './ValidationRules';
import Input from "../../../components/Input/input";
import { Grid, Button } from "@material-ui/core";

import "../../Form/Form.css";

export default function PersonalDetails({ setForm, formData, navigation, errors, setErrors }) {
  const { name, DNI } = formData;

  const { previous, next } = navigation;

  const handleNext = (event) =>{
    if (event) event.preventDefault();
    setErrors(validatePersonalDetails(formData));
    next();
  }

  return (
    <>
      <Grid item>
        <Input
          type='text'
          label={traslate.FORM.NAME}
          placeholder={traslate.FORM["NAME-PLACEHOLDER"]}
          name="name"
          value={name}
          onChange={setForm}
        />
        {errors.name && <p className="error-message">{errors.name}</p>}
      </Grid>
      <Grid item>
        <Input
          type='number'
          label={traslate.FORM.DNI}
          placeholder={traslate.FORM["DNI-PLACEHOLDER"]}
          name="DNI"
          value={DNI}
          onChange={setForm}
        />
        {errors.DNI && <p className="error-message">{errors.DNI}</p>}
      </Grid>

      <Grid item className="form-controls">
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={4}
        >
          <Grid item>
            <Button variant="contained" color="primary" onClick={previous}>
              {traslate["BUTTONCONTROL"]["BACK"]}
            </Button>
          </Grid>

          <Grid item>
            <Button variant="contained" color="primary" onClick={handleNext}>
              {traslate["BUTTONCONTROL"]["NEXT"]}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
