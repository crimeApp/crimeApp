import React from "react";
import traslate from "../../../assets/traslate/es.json";
import { validateTheftInfo } from './ValidationRules';
import Input from "../../../components/Input/input";
import {
  Grid,
  Button
} from "@material-ui/core";

import "../../Form/Form.css";

export default function TheftInfo({ setForm, formData, navigation, errors, setErrors }) {
  const { typeoftheft, theftinfo } = formData;

  const { previous, next } = navigation;

  const handleNext = (event) =>{
    if (event) event.preventDefault();
    setErrors(validateTheftInfo(formData)); 
    console.log(errors);
    next();
  }

  return (
    <>
    <Grid item>
    <Input
        classname={errors.tyopeoftheft?'error-message': ''}
        type={'text'}
        label={traslate.FORM.THEFT}
        placeholder={traslate.FORM["THEFT-PLACEHOLDER"]}
        name="typeoftheft"
        value={typeoftheft}
        onChange={setForm}
      />
      {errors.typeoftheft && <p className="error-message">{errors.typeoftheft}</p>}
    </Grid>

    <Grid item>
      <Input
        classname={errors.theftinfo?'error-message': ''}
        type={'text'}
        label={traslate.FORM.THIEFINFO}
        placeholder={traslate.FORM["THIEFINFO-PLACEHOLDER"]}
        name="theftinfo"
        value={theftinfo}
        onChange={setForm}
      />
       {errors.theftinfo && <p className="error-message">{errors.theftinfo}</p>}
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
            <Button
              disabled
              variant="contained"
              color="primary"
              onClick={previous}
            >
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
