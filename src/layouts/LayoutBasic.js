import React, { Fragment } from 'react';
import MenuTop from '../components/Menu/MenuTop.jsx';
import { Grid } from "@material-ui/core";
import './LayoutBasic.css';

export default function LayoutBasic({ children }){

    return (
        <Fragment>
            <div className="layout-basic-header">
                <MenuTop/>
            </div>
            <Grid className="layout-basic-content" container justify="center">
                {children}
            </Grid>
        </Fragment>
    );
}
