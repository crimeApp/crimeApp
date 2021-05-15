/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Fragment, useState } from 'react';

import Input from '../Input/input';


import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

import { isBrowser, isMobile } from "react-device-detect";

import "./Form.css"

import ConfirmationDialog from '../Dialog/Dialog';
import { Container } from '@material-ui/core';

const RecentCrime = () => {

  const [persona, setPersona] = useState({
    name: '',
    surname: '',
    year: 0
  })

  const [error, setError] = useState(false);

  const handleChange = (event) => {
    setPersona({
      ...persona,
      [event.target.name]: event.target.value
    })
  }

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
    <Container className="form-wrap">
      <form className="form" onSubmit={handleSubmit}>
        
        <Grid item className="form-input">
          <h2 id="recentcrime-title">
            {traslate["FORM"]["TITLE"]}
          </h2>

          <h4 id="recentcrime-subtitle">
            {traslate["FORM"]["SUBTITLE"]}
          </h4>
          </Grid>
        
        <Grid item className="form-input">
          <Input
            title={traslate.FORM.NAME}
            placeholder={traslate.FORM["NAME-PLACEHOLDER"]}
            name='name'
            value={persona.name}
            onChange={handleChange}
          />
        </Grid>

        <Grid item className="form-input">
          <Input
            title={traslate.FORM.DNI}
            placeholder={traslate.FORM["DNI-PLACEHOLDER"]}
            name='DNI'
            value={persona.DNI}
            onChange={handleChange}
          />
        </Grid>

        <Grid item className="form-input">
          <Input
            title={traslate.FORM.THEFT}
            placeholder={traslate.FORM["THEFT-PLACEHOLDER"]}
            name='typeoftheft'
            value={persona.typeoftheft}
            onChange={handleChange}
          />
        </Grid>

        <Grid item className="form-input">
          <Input
            title={traslate.FORM.THIEFINFO}
            placeholder={traslate.FORM["THIEFINFO-PLACEHOLDER"]}
            name='theftinfo'
            value={persona.typeoftheft}
            onChange={handleChange}
          />
        </Grid>

        <Grid item className="form-input">
          <h3>{traslate.FORM.LOCATION}</h3>

          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe class="gmap_iframe" width="80%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
                src="https://maps.google.com/maps?width=945&amp;height=512&amp;hl=en&amp;q=Recta Martinolli &amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
              <a href="https://www.embedmymap.com/"></a>
            </div>
          </div>
        </Grid>


        <Grid className="form-button">
          <Button
            type="button"
            variant="contained"
            color="primary"
            onClick={handleOpen}>
            {traslate["BUTTONCONTROL"]["NEXT"]}
          </Button>
        </Grid>

        <ConfirmationDialog
          open={open}
          title={traslate["CONFIRMATION-DIALOG"]["TITLE"]}
          text={traslate["CONFIRMATION-DIALOG"]["TEXT"]}
          buttonText={traslate["CONFIRMATION-DIALOG"]["BUTTON-TEXT"]}
          handleClose={handleClose} />

      </form>
    </Container>

  )
}

export default RecentCrime;