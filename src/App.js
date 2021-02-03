import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from "./component/login";
import Register from "./component/register";
import Dashboard from "./component/dashboard";


function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Switch>
            <Route
               exact
              path="/login"
              component={Login}
            />
          <Route
            exact
            path="/"
            component={Register}
            />
             <Route
            exact
            path="/dashboard"
            component={Dashboard}
            />
            </Switch>
            </BrowserRouter>
     </div>
  );
}

export default App;
