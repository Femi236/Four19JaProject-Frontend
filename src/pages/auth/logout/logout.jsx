import React, { Component } from "react";
import { useDispatch } from "react-redux";
import { authenticate, unauthenticate } from "../../../app/userSlice";

function Logout(props) {
  // Clearing local storage
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  localStorage.removeItem("isAuthenticated");

  const dispatch = useDispatch();
  dispatch(unauthenticate());

  // Redirect to login
  props.history.push("/login");

  return <div></div>;
}

export default Logout;
