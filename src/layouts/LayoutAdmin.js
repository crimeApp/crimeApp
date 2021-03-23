import React from 'react';
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
        <Container maxWidth="auto">
            <MenuTop/>
            <Container className="layout-admin">
                
                <Container className="layout-admin-content">
                    <LoadRoutes routes={routes}/>
                </Container>

                <Grid item xs={12} className="layout-admin-footer">Footer</Grid>
            </Container>
        </Container>
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