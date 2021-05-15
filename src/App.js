import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import AdminHome from './pages/Admin/Admin';
import AdminSignIn from './pages/Admin/SignIn';
import Home from './pages/Home';
import UserSignIn from './pages/User/SignIn';
import Contact from "./pages/Contact";

import './index.css';
import LayoutAdmin from "./layouts/LayoutAdmin";
import LayoutBasic from './layouts/LayoutBasic';


function App() {

  return (
    <Router>
        <Switch>
          <LayoutBasic>
            <Route
              path="/"
              exact={true}
              component={Home} />

            <Route
              path="/contact"
              exact={true}
              component={Contact} />

            <Route
              path="/login"
              exact={true}
              component={UserSignIn} />
          </LayoutBasic>
          
          <LayoutAdmin>
            <Route
              path="/admin"
              exact={true}
              component={AdminHome}
            />

            <Route
              path="/admin/login"
              exact={true}
              component={AdminSignIn} />
          </LayoutAdmin>
          
        </Switch>
    </Router>
  );
}

export default App;

