import "../components/Login.css";
import React, { useState, useContext } from "react";
import axios from "axios";
import { store } from "../App";
import { Navigate } from "react-router-dom";
function Login() {
  console.log(store);
  const loginStyle = {
    paddingTop: "120px",
  };
  const [data, setData] = useState({
    email: "",
    password: "",
    user: "",
  });
  const [token, setToken] = useContext(store);
  console.log(token);
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (e.target.name === "register") {
      data.hash = data.password;
      axios.post("http://localhost:5000/register", data).then((res) => {
        setData({ ...data, user: res.data });
        alert(res.data);
      });
    } else if (e.target.name === "login") {
      data.hash = data.password;
      axios.post("http://localhost:5000/login", data).then((res) => {
        setToken(res.data);
        alert(res.data);
      });
    }
  };
  if (token) {
    return <Navigate to="/Profile" />;
  }
  return (
    <div className="row Login" style={loginStyle}>
      <div className="col-md-6 mx-auto p-0">
        <div className="card">
          <div className="login-box">
            <div className="login-snip">
              <input
                id="tab-1"
                type="radio"
                name="tab"
                className="sign-in"
                defaultChecked=""
              />
              <label htmlFor="tab-1" className="tab">
                Login
              </label>
              <input id="tab-2" type="radio" name="tab" className="sign-up" />
              <label htmlFor="tab-2" className="tab">
                Sign Up
              </label>
              <div className="login-space">
                <div className="login">
                  <div className="group">
                    <label htmlFor="user" className="label">
                      Username
                    </label>
                    <input
                      id="user"
                      type="text"
                      name="user"
                      className="input"
                      placeholder="Enter your username"
                      onChange={changeHandler}
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="pass" className="label">
                      Password
                    </label>
                    <input
                      onChange={changeHandler}
                      id="pass"
                      type="password"
                      className="input"
                      data-type="password"
                      name="password"
                      placeholder="Enter your password"
                    />
                  </div>
                  <div className="group">
                    <input
                      type="submit"
                      className="button"
                      defaultValue="Sign In"
                      name="login"
                      onClick={submitHandler}
                    />
                  </div>
                </div>
                <div className="sign-up-form">
                  <div className="group">
                    <label htmlFor="user" className="label">
                      Username
                    </label>
                    <input
                      id="user"
                      type="text"
                      className="input"
                      name="user"
                      onChange={changeHandler}
                      placeholder="Create your Username"
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="pass" className="label">
                      Password
                    </label>
                    <input
                      id="pass"
                      type="password"
                      className="input"
                      data-type="password"
                      name="password"
                      onChange={changeHandler}
                      placeholder="Create your password"
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="pass" className="label">
                      Email Address
                    </label>
                    <input
                      id="pass"
                      type="text"
                      className="input"
                      name="email"
                      onChange={changeHandler}
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div className="group">
                    <input
                      type="submit"
                      className="button"
                      defaultValue="Sign Up"
                      name="register"
                      onClick={submitHandler}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
