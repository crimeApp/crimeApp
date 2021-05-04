import React from 'react';
import Grid from '@material-ui/core/Grid';
import CustomSwitch from '../components/Switch';

export default function Contact (){

    return(
        <Grid container
            direction="column"
            justify="center">
            <CustomSwitch labelText="Fue atacado?" />
        </Grid>
    )
}