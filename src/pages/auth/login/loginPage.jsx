import React, { Component, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAuthenticated, setUser } from "../../../userSlice";
import { useForm } from "react-hook-form";
import accountService from "../../../api/accountService";

function LoginPage(props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const authenticated = useSelector((state) => state.user.isAuthenticated);
  if (authenticated) {
    props.history.push("/");
  }
  // useEffect(() => {
  //   // Your code here
  //   if (authenticated) {
  //     props.history.push("/");
  //   }
  // }, []);

  // console.log(watch("example"));
  const onSubmit = async (data) => {
    let res = await accountService.login(data.username, data.password);
    console.log(res);
    if (res === true) {
      props.history.push("/");
    } else {
      console.log("incorrect username or password");
    }
  };

  return (
    <React.Fragment>
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
          </form>
        </div>
        <div className="col"></div>
      </div>
    </React.Fragment>
  );
}

export default LoginPage;
