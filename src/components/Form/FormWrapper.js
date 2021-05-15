import React from "react";
import "./Form.css";
import FormStepper from "./FormStepper";
import { Grid } from "@material-ui/core";

export default function FormWrapper({ title, subtitle, children, isMobile }) {
  return (
    <Grid
      className="form-wrap"
      container
      direction="column"
      justify={"flex-start"}
      alignItems="center"
    >
      <Grid item>
        <h2>{title}</h2></Grid>

        <Grid item >
        <h4>{subtitle}</h4>
      </Grid>

      <Grid item>
        <FormStepper value={10} />
      </Grid>

      <Grid item >{children}</Grid>
    </Grid>
  );
}
