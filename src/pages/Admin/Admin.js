import React from 'react';
import CustomTabs from '../../components/Tabs/Tabs';
import { Grid } from '@material-ui/core';

const labels = ['Cash', 'Credit Card', 'Bitcoin'];

export default function AdminHome(){
    return(
        <Grid container m={4}>
           <CustomTabs labels={ labels }></CustomTabs>
        </Grid>
    )
}