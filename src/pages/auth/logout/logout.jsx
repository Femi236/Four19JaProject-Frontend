import React, { Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAuthenticated, setUser } from "../../../userSlice";

function Logout(props) {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");

  const dispatch = useDispatch();
  dispatch(setAuthenticated(false));

  props.history.push("/login");

  console.log("logout");
  return <div></div>;
}

export default Logout;
