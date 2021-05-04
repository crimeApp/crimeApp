import React from 'react';
import Grid from '@material-ui/core/Grid';
import TabPanel from '../components/Tab/TabPanel';

export default function Contact (){
    const tabs = ['Hola', 'esto', 'es', 'una', 'prueba.'];
    return(
        <Grid container direction="column">
             <TabPanel tabs={tabs}/>
        </Grid>
    )
}