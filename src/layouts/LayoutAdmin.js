import React, { Fragment } from 'react';
import { Route, Switch } from "react-router-dom";

import { Container } from '@material-ui/core';

//import { makeStyles } from '@material-ui/core/styles';
//import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import MenuTop from '../components/Menu/MenuTop';

/* 
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  })); */

export default function LayoutAdmin(props){
    const { routes } = props;
    //const classes = useStyles();


    return (
        <Fragment>
            <MenuTop/>

            <Fragment> 
                    <LoadRoutes routes={routes}/>
            </Fragment>

        </Fragment>
    );
}

function LoadRoutes({ routes }){
    return <Switch>
                {routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.component}/> 
                ))}
            </Switch>;
}