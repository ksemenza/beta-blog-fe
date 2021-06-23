import React, { useState } from "react";
import Register from "./Register";
import { loginUser } from "./user-action";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import '../assets/css/login.css'

const Login = (props) => {
  const [account, setAccount] = useState(false);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.loginUser(user, props.history);
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    setAccount(!account);
  };

  let usernameCase = user.username.toLowerCase();

  return (
    <div className="main-cta login-cta">
      {/* <h1 className="page-title">Beta Blog What's on Your Nog?</h1> */}
      <button onClick={handleClick}>
        {!account ? "Create account" : "Back to login"}
      </button>
      {account ? (
        <Register toggleRegister={handleClick} />
      ) : (
        <div>
          <form onSubmit={handleSubmit}>
            <legend>Login</legend>

            <div className="field-cta username">
              <label className="label-login label-username" htmlFor="username">
                Username
              </label>
              <input
                autoFocus
                required
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                onChange={handleChange}
                value={usernameCase}
              />
            </div>

            <div className="field-cta password">
              <label className="label-login label-password" htmlFor="password">
                Password
              </label>
              <input
                required
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={user.password}
                onChange={handleChange}
              />
            </div>
            <button className="btn login-btn" type="submit">
              Login
            </button>
            {props.isLoggingIn && (
              <Loader type="ThreeDots" color="white" height={80} width={80} />
            )}
          </form>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { loginUser })(Login);
