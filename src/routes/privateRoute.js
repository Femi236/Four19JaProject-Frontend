// This is used to determine if a user is authenticated and
// if they are allowed to visit the page they navigated to.

// If they are: they proceed to the page
// If not: they are redirected to the login page.
import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  // Add your own authentication on the below line.
  const isLoggedIn = useSelector((state) => state.user.isAuthenticated); //AuthService.isLoggedIn();

  return (
    <React.Fragment>
      <Route
        {...rest}
        render={(props) =>
          JSON.parse(isLoggedIn) === true ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          )
        }
      />
    </React.Fragment>
  );
};

export default PrivateRoute;
