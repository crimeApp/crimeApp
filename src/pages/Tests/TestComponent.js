import React from 'react';
import { Route, Switch } from "react-router-dom";
import './Test.css';
import { Container } from '@material-ui/core';

export default function TestComponent(props){
    const { routes } = props;

    return (
        <>
            <Container className="layout-test-content">
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