import axios from "axios";
import AccountService from "./accountService";

/**
 * Axios interceptor to refresh access token
 */
axios.interceptors.response.use(null, (error) => {
  // Checking if reason for failure is expired JWT token
  if (error.config && error.response && error.response.status === 401) {
    if (
      error.response.headers.error &&
      error.response.headers.error.startsWith("JWT expired")
    ) {
      let ac = new AccountService();
      // Refresh tokens
      return ac.updateToken().then((token) => {
        error.config.headers["Authorization"] = "Bearer " + token; //localStorage.getItem("access_token");
        error.config.headers["Content-Type"] = "application/json";
        return axios.request(error.config);
      });
    } else {
      // If refreshing failed then prompt to login
      window.location.href = "/logout";
    }
  }

  return Promise.reject(error);
});
