import React from 'react';
import CustomTabs from '../../components/Tabs/Tabs';
import { Grid } from '@material-ui/core';

const labels = ['Cash', 'Credit Card', 'Bitcoin'];

export default function AdminHome(){
    return(
        <>  
           <CustomTabs labels={ labels }></CustomTabs>
        </>
    )
}