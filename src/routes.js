import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './Pages/Home/Home';
import User from './Pages/User/User';

const Routes = () => (
   <BrowserRouter>
      <Switch>
         <Route exact path="/" component={Home} />
         <Route path="/user/profile" component={User} />>
      </Switch>
   </BrowserRouter>
);

export default Routes;