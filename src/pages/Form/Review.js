import React from "react";
import { Grid, Card } from "@material-ui/core";
import "./Form.css";

const Review = ({formData}) => {

  return (
    <Card variant="outlined">
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <h3>Review your data</h3>
        </Grid>
        
        
      </Grid>
    </Card>
  );
};

export default Review;