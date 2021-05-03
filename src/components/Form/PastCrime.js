import React, { useState } from "react";

import {
  Grid,
  Card,
  Button,
  Stepper,
  Step,
  StepButton,
  Typography,
} from "@material-ui/core";

import PersonalDetails from "./StepsPastCrime/PersonalDetails";
import TheftInfo from "./StepsPastCrime/TheftInfo";
import TheftDetails from "./StepsPastCrime/TheftDetails";

import traslate from "../../assets/traslate/es.json";

import "./Form.css";

export default function PastCrime() {
  //const [error, setError] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const steps = getSteps();

  const [persona, setPersona] = useState({
    name: "",
    surname: "",
    year: 0,
  });

  function getSteps() {
    return [
      "Información del siniestro",
      "Información Personal",
      "Detalles del siniestro",
    ];
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <TheftInfo persona={persona} />;
      case 1:
        return <PersonalDetails persona={persona} />;
      case 2:
        return <TheftDetails persona={persona} />;
      default:
        return "Unknown step";
    }
  }

  /*   const handleChange = (event) => {
    setPersona({
      ...persona,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let { name, DNI, typeoftheft, theftinfo } = persona;

    // validacion
    if (
      name.trim() === "" ||
      DNI.trim() === "" ||
      typeoftheft.trim() === "" ||
      theftinfo.trim() === ""
    ) {
      setError(true);
      return;
    }

    setError(false);
  }; */

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <Card variant="outlined" className="form">
      <Grid container direction="column" justify="start" alignItems="center">
        <Grid item className="form-header">
          <h2 id="recentcrime-title">{traslate["FORM"]["TITLE-PASTCRIME"]}</h2>

          <h4 id="recentcrime-subtitle">{traslate["FORM"]["SUBTITLE"]}</h4>
        </Grid>

        <Grid item className="form-progress">
          <Stepper nonLinear activeStep={activeStep}>
            {steps.map((label, index) => (
              <Step key={label}>
                <StepButton
                  onClick={handleStep(index)}
                  completed={completed[index]}
                >
                  {label}
                </StepButton>
              </Step>
            ))}
          </Stepper>
        </Grid>

          <Grid item className="form-content">
            {getStepContent(activeStep)}
          </Grid>

          <Grid item className="form-controls">
            <Grid container direction="row" justify="center" alignItems="center" spacing={4}>
              <Grid item> 
              <Button 
                disabled={activeStep === 0} 
                variant="contained"
                color="primary"
                onClick={handleBack}>Back</Button>
              </Grid>

              <Grid item> 
              <Button 
                onClick={handleBack} 
                variant="contained"
                color="primary">Next</Button>
              </Grid>
            </Grid>
        
          </Grid>
      </Grid>
    </Card>
  );
}
