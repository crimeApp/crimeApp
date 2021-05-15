import React from "react";
import {
  BrowserRouter,
  Route, 
  Switch
} from "react-router-dom";

import AdminHome from "./pages/Admin/Admin";
import AdminSignIn from "./pages/Admin/SignIn";
import Home from "./pages/Home";
import UserSignIn from "./pages/User/SignIn";
import Contact from "./pages/Contact";

import "./App.css";
import LayoutAdmin from "./layouts/LayoutAdmin";
import LayoutBasic from "./layouts/LayoutBasic";

function App() {
  return (
    <BrowserRouter>

      <Switch>
        <RouteWrapper path="/admin" component={AdminHome} layout={LayoutAdmin} />
        <RouteWrapper path="/admin/login" component={AdminSignIn} layout={LayoutAdmin} />
        <RouteWrapper path="/" component={Home} layout={LayoutBasic} />
        <RouteWrapper path="/login" component={UserSignIn} layout={LayoutBasic} />
        <RouteWrapper path="/contact" component={Contact} layout={LayoutBasic} />
      </Switch>

    </BrowserRouter>
  );
}

function RouteWrapper({
  component: Component, 
  layout: Layout, 
  ...rest
}) {
  return (
    <Route {...rest} render={(props) =>
      <Layout {...props}>
        <Component {...props} />
      </Layout>
    } />
  );
}

export default App;
