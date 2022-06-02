import Axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import "../Visit/Login.css";

const Login = (props) => {
  let [userID, setUserID] = useState(0);
  let [userPassword, setPassword] = useState(0);
  // const [email, setEmail] = useState("");

  const [loginStatus, setLoginStatus] = useState("");
  let navigate = useNavigate();

  const login = () => {
    Axios.post("http://localhost:3001/visit/userLogin", {
      userID: userID,
      userPassword: userPassword,
    }).then((response) => {
      if (response.data.message === "yes") {
        // clean the session first then  save a new one!
        localStorage.removeItem("ID");
        alert("login successful!");
        localStorage.setItem("ID", userID);
        //localStorage.setItem("ID", userName);
        console.log(localStorage.getItem("ID"));
        navigate("/UserCurd"); // 登录后跳转到其他界面
      } else {
        setLoginStatus(response.data.message);
        alert(response.data.message);
      }
    });
  };

  const removeSession = () => {
    localStorage.removeItem("ID");
    localStorage.removeItem("staffID");
  };
  return (
    <div className="Page">
      <ul>
        <li
          className="active
        "
        >
          <Link to="/">Home </Link>
        </li>
        <li>
          <Link to="/Staffs">Staffs </Link>
        </li>
        <li>
          <Link to="/Register">Register </Link>
        </li>
        <li>
          <Link to="/Login">Login </Link>
        </li>
        <li>
          <Link to="/Login" onChange={removeSession}>
            Logout
          </Link>
        </li>
      </ul>

      <div className="Content">
        <h1>Login</h1>
        <label>userID</label>
        <input
          type="text"
          placeholder="UserID..."
          maxLength={8}
          minLength={1}
          onChange={(event) => {
            setUserID(event.target.value);
          }}
        ></input>

        <label>password</label>
        <input
          type="password"
          placeholder="Password..."
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        ></input>

        <button onClick={login}>😘 login</button>
      </div>
      <h1>{loginStatus}</h1>
    </div>
  );
};

export default Login;
