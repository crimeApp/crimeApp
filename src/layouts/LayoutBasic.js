import React from 'react';
import { Route, Switch } from "react-router-dom";

import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import MenuTop from '../components/Menu/MenuTop';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

export default function LayoutBasic(props){
    const { routes } = props;

    const classes = useStyles();

    return (
        <Container>
            <h2>User Menu</h2>
            <MenuTop/>
            <Container className="layout-basic">
                
                <Container className="layout-basic-content">
                    <LoadRoutes routes={routes}/>
                </Container>

                <Grid  className="layout-basic-footer">Footer</Grid>
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