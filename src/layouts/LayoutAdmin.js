import React, { Fragment } from 'react';
import { Route, Switch } from "react-router-dom";
import "./LayoutAdmin.css";

import MenuTop from '../components/Menu/MenuTop';

export default function LayoutAdmin(props){
    const { routes } = props;

    return (
      <Fragment>
        <div className="layout-admin-header">
           <MenuTop/>
        </div>

      <Fragment> 
        <div className="layout-admin-content">
          <LoadRoutes routes={routes}/>
        </div>
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