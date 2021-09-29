import axios from "axios";

/**
 * Header containing jwt token
 */
const headers = {
  Authorization: "Bearer " + localStorage.getItem("access_token"),
};

class AccountService {
  /**
   * Function to login user and get tokens
   * @param {String} username
   * @param {String} password
   * @returns true or false based on response
   */
  login(username, password) {
    return axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}auth`,
      data: {
        username: username,
        password: password,
      },
    })
      .then((response) => {
        let access_token = response.data.access_token;
        let refresh_token = response.data.refresh_token;
        localStorage.setItem("access_token", access_token);
        localStorage.setItem("refresh_token", refresh_token);
        return true;
      })
      .catch((error) => {
        return false;
      });
  }

  /**
   * Function to register a user and then login
   * @param {String} username
   * @param {String} firstName
   * @param {String} lastName
   * @param {String} email
   * @param {String} password
   * @returns true or false based on response
   */
  register(username, firstName, lastName, email, password) {
    return axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}user/register`,
      params: {
        username: username,
        firstName: firstName,
        lastName: lastName,
        password: password,
        email: email,
      },
    })
      .then((response) => {
        return true;
      })
      .catch((error) => {
        return false;
      });
  }

  /**
   * Function to update acess and refresh tokens with refresh tokens
   * @returns void
   */
  updateToken() {
    return axios({
      methos: "post",
      url: `${process.env.REACT_APP_API_URL}security/token/refresh`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("refresh_token"),
      },
    })
      .then((response) => {
        if (response.headers.access_token && response.headers.refresh_token) {
          localStorage.setItem("access_token", response.headers.access_token);
          localStorage.setItem("refresh_token", response.headers.refresh_token);
          return response.headers.access_token;
        }
      })
      .catch((error) => {
        return null;
      });
  }

  // #TODO: DELETE
  getAllUsers() {
    return axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}user/all`,
      headers: headers,
    })
      .then(function (response) {
        console.log("users response: ", response);
      })
      .catch((error) => {
        console.log("normal error");
      });
  }
}

export default new AccountService();
