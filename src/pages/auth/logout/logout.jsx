import React, { Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authenticate, unauthenticate, setUser } from "../../../userSlice";

function Logout(props) {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  localStorage.removeItem("user");
  localStorage.removeItem("isAuthenticated");

  const dispatch = useDispatch();
  dispatch(unauthenticate());
  dispatch(setUser({}));

  props.history.push("/login");

  console.log("logout");
  return <div></div>;
}

export default Logout;
