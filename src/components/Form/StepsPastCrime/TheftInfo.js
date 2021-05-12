import React, { useState } from "react";
import traslate from "../../../assets/traslate/es.json";
import Input from "../../../components/Input/input";
import { Grid, Button } from "@material-ui/core";

import "../../Form/Form.css";

export default function TheftInfo({ setForm, formData, navigation }) {
  const { typeoftheft, theftinfo } = formData;

  const { previous, next } = navigation;

  const [errors, setErrors] = useState({error: false, errorMessage: ''});

  const validateTheftInfo = () => {
    if (theftinfo !== "" && typeoftheft !== "") {
      next();
    }else {
      setErrors({error:true, errorMessage: "Complete las casillas"});
    }  
  };

  const handleNext = (event) => {
    validateTheftInfo();
    
  };

  return (
    <>
      <Grid item>
        <Input
          error={errors.error}
          type={"text"}
          label={traslate.FORM.THEFT}
          placeholder={traslate.FORM["THEFT-PLACEHOLDER"]}
          name="typeoftheft"
          value={typeoftheft}
          onChange={setForm}
        />
      </Grid>

      <Grid item>
        <Input
          error={errors.error}
          type={"text"}
          label={traslate.FORM.THIEFINFO}
          placeholder={traslate.FORM["THIEFINFO-PLACEHOLDER"]}
          name="theftinfo"
          value={theftinfo}
          onChange={setForm}
        />
        {errors.error && (
          <p className="error-message">{errors.errorMessage}</p>
        )}
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
            <Button
              variant="contained"
              color="primary"
              onClick={handleNext}
              type="submit"
            >
              {traslate["BUTTONCONTROL"]["NEXT"]}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
