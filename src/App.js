import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PastCrimePage from "./pages/Form/PastCrimePage.js";
import AdminHome from "./pages/Admin/Admin";
import AdminSignIn from "./pages/Admin/SignIn";
import Home from "./pages/Home";
import UserSignIn from "./pages/User/SignIn";
import Contact from "./pages/Contact";

import "./index.css";

function App() {
  return (
    <Router>
      <Switch>
          <Route
            path="/pastcrimeform"
            exact={true}
            component={PastCrimePage}
          />

          <Route path="/" exact={true} component={Home} />

          <Route path="/contact" exact={true} component={Contact} />

          <Route path="/login" exact={true} component={UserSignIn} />


          <Route path="/admin" exact={true} component={AdminHome} />

          <Route path="/admin/login" exact={true} component={AdminSignIn} />
      </Switch>
    </Router>
  );
}

export default App;
