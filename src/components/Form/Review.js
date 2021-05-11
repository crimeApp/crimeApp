import React from "react";
import { Grid, Button, Card } from "@material-ui/core";
import "./Form.css";

const Review = ({ setForm, formData, navigation }) => {
  const { name, DNI, typoftheft, theftdetails } = formData;

  const { next, go } = navigation;

  return (
    <Card variant="outlined">
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <h3>Review your data</h3>
        </Grid>

        <Grid item>Name</Grid>

        <Grid item> First name: {`${name}`}</Grid>

        <Grid item>DNI: {`${DNI}`}</Grid>
        <Button onClick={() => go("names")} variant="contained" color="primary">
          Edit
        </Button>

        <Grid item>DNI: {`${typoftheft}`}</Grid>
        <Button onClick={() => go("names")} variant="contained" color="primary">
          Edit
        </Button>

        <Grid item>DNI: {`${theftdetails}`}</Grid>
        <Button onClick={() => go("names")} variant="contained" color="primary">
          Edit
        </Button>

        <Grid item>
          <Button onClick={next} variant="contained" color="primary">
            Confirmar
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Review;
