import React from "react";
import { Button, Grid } from "@material-ui/core";
import traslate from "../../assets/traslate/es.json";
import "./Form.css";

const Submit = () => {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item>
        <Button variant="contained" color="primary" href="/">
          {traslate["CONFIRMATION-DIALOG"]["BUTTON-TEXT"]}
        </Button>
      </Grid>
      <img alt="Submit" src={require("../../assets/submit_image.png").default} />
    </Grid>
  );
};

export default Submit;
