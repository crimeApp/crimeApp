import React from "react";
import "./Form.css";

import { Grid, Card } from "@material-ui/core";

export default function PastCrime({ title, subtitle, children }) {
  return (
    <Card variant="outlined" className="form">
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item className="form-header">
          <h2 id="recentcrime-title">{title}</h2>

          <h4 id="recentcrime-subtitle">{subtitle}</h4>
        </Grid>

        <Grid item className="form-progress"></Grid>

        <Grid item className="form-content">{children}</Grid>
      </Grid>
    </Card>
  );
}
