import React from "react";
import "./Form.css";
import FormStepper from "./FormStepper";
import { Grid, Divider } from "@material-ui/core";

export default function FormWrapper({ title, subtitle, hideprogress, children, loading }) {
  return (
    <Grid container justify="center" className="p-top-3 form-background">
      <Grid container direction='column' className="form-wrap"  justify="center" alignItems="center">
        <Grid item xs={10} className="form-wrap-titles">
          <h2>{title}</h2>
          <h4>{subtitle}</h4>
        </Grid>
        
        <Grid item xs={10}>
          {hideprogress? <Divider/> : <FormStepper value={loading} />}
        </Grid>

        <Grid item xs={12} className="m-bottom-1">
          {children}
        </Grid>
      </Grid>
    </Grid>
  );
}
