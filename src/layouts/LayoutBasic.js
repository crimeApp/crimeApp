import React from 'react';
import { Route, Switch } from "react-router-dom";

import { Container } from '@material-ui/core';
import "./LayoutBasic.css";
import MenuTop from '../components/Menu/MenuTop';

export default function LayoutBasic(props){
    const { routes } = props;

    return (
        <>
            <MenuTop/>
            <Container className="layout-basic-content">
                
                <LoadRoutes routes={routes}/>
            </Container>
        </>
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