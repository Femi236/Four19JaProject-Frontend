import axios from "axios";

axios.interceptors.response.use(null, (error) => {
  console.log("in intercepted error");
  if (error.config && error.response && error.response.status === 401) {
    if (
      error.response.headers.error &&
      error.response.headers.error.startsWith("JWT expired")
    ) {
      let ac = new AccountService();
      return ac.updateToken().then((token) => {
        error.config.headers["Authorization"] = "Bearer " + token; //localStorage.getItem("access_token");
        error.config.headers["Content-Type"] = "application/json";
        return axios.request(error.config);
      });
    } else {
      window.location.href = "/logout";
    }
  }

  return Promise.reject(error);
});

const headers = {
  Authorization: "Bearer " + localStorage.getItem("access_token"),
};

class AccountService {
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
        return {
          username: username,
          firstName: firstName,
          lastName: lastName,
          email: email,
        };
      })
      .catch((error) => {
        return null;
      });
  }

  updateToken() {
    return axios({
      methos: "post",
      url: `${process.env.REACT_APP_API_URL}security/token/refresh`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("refresh_token"),
      },
    })
      .then((response) => {
        console.log("in update token");
        if (response.headers.access_token && response.headers.refresh_token) {
          console.log("got new tokens");
          localStorage.setItem("access_token", response.headers.access_token);
          localStorage.setItem("refresh_token", response.headers.refresh_token);
          return response.headers.access_token;
        }
        console.log("out");
        // return true
      })
      .catch((error) => {
        console.log("nahhhh");
      });
  }

  getAllUsers() {
    return axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}user/all`,
      headers: headers,
    })
      .then(function (response) {
        console.log("users response: ", response);
        // console.log(response);
      })
      .catch((error) => {
        console.log("normal error");
      });
  }
}

export default new AccountService();
