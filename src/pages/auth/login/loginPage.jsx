import React, { Component, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authenticate, unauthenticate } from "../../../app/userSlice";
import { useForm } from "react-hook-form";
import accountService from "../../../api/accountService";
import { Link } from "react-router-dom";

/**
 * Component for the login page
 */
function LoginPage(props) {
  // Formik variables
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Check if user is logged in or not
  const authenticated = useSelector((state) => state.user.isAuthenticated);
  const dispatch = useDispatch();
  // If user is logged in already, redirect to home page
  useEffect(() => {
    if (JSON.parse(authenticated) === true) {
      props.history.push("/");
    }
  }, []);

  // The page the user came from
  const location = props.location;

  /**
   * Function to send form data to the API
   * @param {*} data
   */
  const onSubmit = async (data) => {
    // Send data to API
    let res = await accountService.login(data.username, data.password);
    if (res === true) {
      // Set isAuthenticated state to true
      dispatch(authenticate());
      if (
        location.state &&
        location.state.from &&
        location.state.from.pathname
      ) {
        // Redirect user to page they came from
        props.history.push(location.state.from.pathname);
      } else {
        // Redirect user to home page
        props.history.push("/");
      }
    } else {
      console.log("incorrect username or password");
    }
  };

  return (
    <React.Fragment>
      <div className="container mt-lg-5">
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label for="usernameInput">Username</label>
                <input
                  type="string"
                  className="form-control"
                  id="usernameInput"
                  placeholder="Enter username"
                  {...register("username")}
                />
              </div>
              <div className="form-group">
                <label for="passwordInput">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="passwordInput"
                  placeholder="Password"
                  {...register("password")}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <div className="">
                Don't have an account? <Link to="/register">Sign up</Link>
              </div>
            </form>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default LoginPage;
