import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import './App.scss';
import routes from './config/routes';


function App() {

  return (
    <Router>
    <div className='app'>
      <Switch>
        {routes.map((route, index) =>(
          <RoutewithSubroutes key={index} {...route}/>
        ))}
      </Switch>
    </div>
    </Router>
  );
}


function RoutewithSubroutes(route){
  return (<Route 
            path={route.path}
            exact={route.exact}
            render={props => <route.component routes={route.routes}/>}
            />
          );

}

export default App;
