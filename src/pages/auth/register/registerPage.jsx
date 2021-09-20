import React, { useEffect } from "react";
import accountService from "../../../api/accountService";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { authenticate, unauthenticate, setUser } from "../../../userSlice";

function LoginPage(props) {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const authenticated = useSelector((state) => state.user.isAuthenticated);
  console.log(authenticated);
  console.log("TESTING AREA:");
  console.log(localStorage.getItem("sbjkbhslj") || "hi");
  useEffect(() => {
    console.log("HIT REG", typeof authenticated);
    if (JSON.parse(authenticated) === true) {
      console.log("redirect");
      props.history.push("/");
    }
  }, []);

  const onSubmit = async (data) => {
    let res = await accountService.register(
      data.username,
      data.firstName,
      data.lastName,
      data.email,
      data.password
    );
    if (res !== null) {
      let login = await accountService.login(data.username, data.password);
      if (login === true) {
        dispatch(setUser(res));
        dispatch(authenticate());
        props.history.push("/");
      }
    } else {
      console.log("wrong validation");
    }
  };

  return (
    <React.Fragment>
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* ROW 1 */}
            <div className="row">
              {/* USERNAME */}
              <div className="col">
                <div className="form-group">
                  <label for="usernameInput">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="usernameInput"
                    placeholder="Username"
                    // onChange={(e) => this.setUsername(e.target.value)}
                    {...register("username")}
                  />
                </div>
              </div>
              {/* FIRST NAME */}
              <div className="col">
                <div className="form-group">
                  <label for="firstNameInput">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstNameInput"
                    placeholder="First Name"
                    // onChange={(e) => this.setFirstName(e.target.value)}
                    {...register("firstName")}
                  />
                </div>
              </div>
            </div>
            {/* ROW 2 */}
            <div className="row">
              {/* LAST NAME */}
              <div className="col">
                <div className="form-group">
                  <label for="lastNameInput">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastNameInput"
                    placeholder="Last Name"
                    // onChange={(e) => this.setLastName(e.target.value)}
                    {...register("lastName")}
                  />
                </div>
              </div>
              {/* EMAIL */}
              <div className="col">
                <div className="form-group">
                  <label for="emailInput">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="emailInput"
                    placeholder="Email"
                    // onChange={(e) => this.setEmail(e.target.value)}
                    {...register("email")}
                  />
                </div>
              </div>
            </div>
            {/* ROW 2 */}
            <div className="row">
              {/* PASSWORD */}
              <div className="col">
                <div className="form-group">
                  <label for="passwordInput">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="passwordInput"
                    placeholder="Password"
                    // onChange={(e) => this.setPassword(e.target.value)}
                    {...register("password")}
                  />
                </div>
              </div>
              {/* CONFIRM PASSWORD */}
              <div className="col">
                <div className="form-group">
                  <label for="confirmPasswordInput">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPasswordInput"
                    placeholder="Confirm Password"
                    {...register("confirmPassword", {
                      validate: (value) => value === watch("password"),
                    })}
                  />
                </div>
              </div>
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
