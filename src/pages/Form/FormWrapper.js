import React from "react";
import "./Form.css";
import FormStepper from "./FormStepper";
import { Grid } from "@material-ui/core";

export default function FormWrapper({ title, subtitle, children, loading }) {
  return (
    <Grid container justify="center" className="p-top-3 form-background">
      <Grid container className="form-wrap"  justify="center" alignItems="center">
        <Grid item xs={10}>
          <h2>{title}</h2>
          <h4>Toda la informacion que se registre quedara completamente anonima. El objetivo es tener datos para analizar la delincuencia en Cordoba.</h4>
          </Grid>
        <Grid item xs={10}>
          <FormStepper value={loading} />
        </Grid>
        <Grid item xs={10} className="p-top-2 m-bottom-3">
          {children}
        </Grid>
        
      </Grid>
    </Grid>
  );
}
