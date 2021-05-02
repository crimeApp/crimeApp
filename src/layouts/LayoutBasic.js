import React, { Fragment } from 'react';
import { Route, Switch } from "react-router-dom";
import "./LayoutBasic.css";

import MenuTop from '../components/Menu/MenuTop';

export default function LayoutBasic(props) {
    const { routes } = props;

    return (
        <Fragment>
            <div className="layout-basic-header">
                <MenuTop />
            </div>

            <Fragment>
                <div className="layout-basic-content">
                    <LoadRoutes routes={routes} />
                </div>
            </Fragment>
        </Fragment>
    );
}

function LoadRoutes({ routes }) {
    return <Switch>
        {routes.map((route, index) => (
            <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component} />
        ))}
    </Switch>;
}