import React, { useState } from "react";
import traslate from "../../../assets/traslate/es.json";
import Input from "../../../components/Input/input";
import { Grid, Button } from "@material-ui/core";

import "../../Form/Form.css";

export default function PersonalDetails({ setForm, formData, navigation }) {
  const { name, DNI } = formData;

  const { previous, next } = navigation;

  const [errors, setErrors] = useState({error: false, errorMessage: ""});
  const [isValid, setValid] = useState(false);

  const validatePersonalInfo = () => {
    if (name === "") {
      setErrors({name: 'Complete la casilla', DNI: ""});
      setValid(false);
    } 

    if (DNI === "") {
      setErrors({name: "", DNI: "Complete su casilla"});
      setValid(false);
    }

    setValid(true);
  };

  const handleNext = (event) => {
    validatePersonalInfo();
    console.log(errors);

    if(isValid){
      next();
    }
  };

  return (
    <>
      <Grid item>
        <Input
          error={errors.error}
          type='text'
          label={traslate.FORM.NAME}
          placeholder={traslate.FORM["NAME-PLACEHOLDER"]}
          name="name"
          value={name}
          onChange={setForm}
        />
      </Grid>
      <Grid item>
        <Input
          error={errors.DNI}
          type='number'
          label={traslate.FORM.DNI}
          placeholder={traslate.FORM["DNI-PLACEHOLDER"]}
          name="DNI"
          value={DNI}
          onChange={setForm}
        />
        {errors.error && <p className="error-message">{errors.errorMessage}</p>}
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
