import React from "react";
import "./Form.css";
import FormStepper from "./FormStepper";
import { Grid } from "@material-ui/core";

export default function FormWrapper({ title, subtitle, children, loading }) {
  return (
    <Grid container justify="center" className="p-top-3 form-background">
      <Grid className="form-wrap" xs={12} md={6} container justify="center" alignItems="center">
        <Grid item xs={10}>
          <h2 className="m-top-3 p-top-3">{title}</h2>
          </Grid>
        <Grid item xs={10}>
          <h4>{subtitle}</h4>
        </Grid>
        <Grid item xs={10}>
          <FormStepper value={loading} />
        </Grid>
        <Grid item xs={10} container className="p-top-3">{children}</Grid>
      </Grid>
    </Grid>
  );
}
