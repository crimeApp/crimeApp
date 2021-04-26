import React from 'react';
import { Route, Switch } from "react-router-dom";

import { Container } from '@material-ui/core';

import MenuTop from '../components/Menu/MenuTop';

export default function LayoutAdmin(props){
    const { routes } = props;

    return (
        <>
            
            <Container className="layout-admin-content">
            <MenuTop/>
                <LoadRoutes routes={routes}>
                </LoadRoutes>
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