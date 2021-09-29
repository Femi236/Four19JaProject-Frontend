import React, { Component } from "react";
import accountService from "../api/accountService";

/**
 * Random private component
 */
class PrivatePage extends React.Component {
  checkLogin = () => {
    accountService.getAllUsers();
  };
  render() {
    return (
      <React.Fragment>
        <div>PRIVATE</div>
        <button onClick={this.checkLogin} className="button btn btn-dark">
          check login
        </button>
      </React.Fragment>
    );
  }
}

export default PrivatePage;
