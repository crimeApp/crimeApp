import React, { Fragment, useState } from 'react';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Input from '../Input/input';

import traslate from "../../assets/traslate/es.json";

import ProgressStepper from './FormStepper';

import {
  BrowserView,
  MobileView
} from "react-device-detect"; 


export default function PastCrime() {

  const [expanded, setExpanded] = useState(false);
  const [step, setStep] = useState(1);
  const [error, setError] = useState(false);

  const [persona, setPersona] = useState({
    name: '',
    surname: '',
    year: 0
  })


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleNext = () => {
    setStep((step) => step + 1);
  };

  const handleBack = () => {
    setStep((step) => step - 1);
  };

  const handleChange = (event) => {
    setPersona({
      ...persona,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault();

    let { name, DNI, typeoftheft, theftinfo } = persona;


    // validacion
    if (name.trim() === '' || DNI.trim() === '' || typeoftheft.trim() === '' || theftinfo.trim() === '') {
      setError(true);
      return;
    }

    setError(false);


  }

  return (
    <Fragment>
      

      <Card variant="outlined" className='MuiCard-root'>
        <CardHeader title={traslate["FORM"]["TITLE"]}/>
      
      <CardContent>
        <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center">
        <Typography variant="body2" color="textSecondary" component="p">
            {traslate["FORM"]["SUBTITLE"]}
        </Typography>

        <ProgressStepper value={step * 50}/>

        <IconButton
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          > 
          <ExpandMoreIcon />
        </IconButton>
        </Grid>

        </CardContent>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Input title={traslate["FORM"]["SUBTITLE"]} />
        </CardContent>
      </Collapse>
    </Card>


      </Fragment>
    );
}
