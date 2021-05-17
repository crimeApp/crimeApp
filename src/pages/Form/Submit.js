/* import React from "react";
import { Button, Card, Grid } from "@material-ui/core";
import traslate from "../../assets/traslate/es.json";
import "./Form.css";

const Submit = ({ navigation }) => {
  const { go } = navigation;
  return (
    <Card variant='elevation' className='form-dialog form'>
      <Grid container direction="column" justify="center" alignItems="center" spacing={3}>
        <Grid item>
          <h2>
            {traslate["CONFIRMATION-DIALOG"]["TITLE"]}
          </h2>
        </Grid>

        <Grid item>
          <h4>
            {traslate["CONFIRMATION-DIALOG"]["TEXT"]}
          </h4>
        </Grid>

        <Grid item id='submit'>
          <Button onClick={go} variant='contained' color='primary'>
            {traslate["CONFIRMATION-DIALOG"]["BUTTON-TEXT"]}
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Submit;
 */