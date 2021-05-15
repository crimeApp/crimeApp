import React from "react";
import traslate from "../../../assets/traslate/es.json";
import Input from "../../../components/Input/input";

import {
  Grid,
  Button
} from "@material-ui/core";

import "../../Form/Form.css";

export default function TheftDetails({ setForm, formData, navigation, isMobile }) {
  const { name } = formData;
  const { previous, next } = navigation;

  const handleNext = (event) => {
   
  };

  return (
    <>
    <Grid item>
      <Input
        size={isMobile? "s" : "m"}
        title={traslate.FORM.NAME}
        placeholder={traslate.FORM["NAME-PLACEHOLDER"]}
        name="name"
        value={name}
        onChange={setForm}
      />
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
              {traslate["COMMON"]["BACK"]}
            </Button>
          </Grid>

          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={handleNext}
              type="submit"
            >
              {traslate["COMMON"]["NEXT"]}
            </Button>
          </Grid>
        </Grid>
        </Grid>
    </>
  );
}
