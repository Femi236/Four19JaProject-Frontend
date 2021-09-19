import axios from "axios";

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
    }).then((response) => {
      console.log(response);
      let access_token = response.data.access_token;
      let refresh_token = response.data.refresh_token;
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("refresh_token", refresh_token);
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
    }).then((response) => {
      console.log(response);
    });
  }

  getAllUsers() {
    return axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}user/all`,
      headers: headers,
    }).then(function (response) {
      console.log(response.data);
    });
  }
}

export default new AccountService();
