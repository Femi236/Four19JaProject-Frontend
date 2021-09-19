import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./privateRoute";

import Login from "./pages/auth/login/loginPage";
import Register from "./pages/auth/register/registerPage";
import Home from "./pages/home/homePage";
import PrivatePage from "./pages/privatePage";
import Logout from "./pages/auth/logout/logout";

const Routes = () => {
  return (
    <Switch>
      {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <PrivateRoute path="/dashboard" component={PrivatePage} />
      <Route exact path="/logout" component={Logout} />
    </Switch>
  );
};

export default Routes;
