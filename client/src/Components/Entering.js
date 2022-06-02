import Axios from "axios";
import React, { useState } from "react";

import "../Components/Entering.css";

const Entering = (props) => {
  const [userNameReg, setUserNameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  //将register 封装成一个函数，然后在其中调用Axios，接下来在button当中引用。
  const register = () => {
    Axios.post("http://localhost:3001/register", {
      username: userNameReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
    });
  };

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      username: userName,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0]);
      }
    });
  };

  return (
    <div className="Entering">
      <div className="registration">
        <h1>registration</h1>
        <label>UserName</label>
        <input
          type="text"
          placeholder="UserName..."
          onChange={(event) => {
            setUserNameReg(event.target.value);
          }}
        ></input>
        <label>password</label>
        <input
          type="text"
          placeholder="Password..."
          onChange={(event) => {
            setPasswordReg(event.target.value);
          }}
        ></input>
        <button onClick={register}>Register</button>
      </div>

      <div className="login">
        <h1>Login</h1>
        <label>username</label>
        <input
          type="text"
          placeholder="UserName..."
          onChange={(event) => {
            setUserName(event.target.value);
          }}
        ></input>
        <label>password</label>
        <input
          type="text"
          placeholder="Password..."
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        ></input>
        <button onClick={login}>login</button>
      </div>
      <h1>{loginStatus}</h1>
    </div>
  );
};

export default Entering;
