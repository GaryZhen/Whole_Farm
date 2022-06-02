import Axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import "../Visit/Register.css";

const Register = (props) => {
  const [userID, setuserID] = useState("");
  const [userName, setuserName] = useState("");
  const [userPassword, setuserPassword] = useState("");
  const [userEmail, setuserEmail] = useState("");
  const [userGender, setuserGender] = useState("");
  //const [userAddress, setuserAddress] = useState("");
  const [userState, setuserState] = useState("");
  const [userCity, setuserCity] = useState("");
  const [userStreet, setuserStreet] = useState("");
  const [userApt, setuserApt] = useState(0);
  const [userZipcode, setuserZipcode] = useState(0);
  //将register 封装成一个函数，然后在其中调用Axios，接下来在button当中引用。
  let navigate = useNavigate();

  //将register 封装成一个函数，然后在其中调用Axios，接下来在button当中引用。
  const registered = () => {
    Axios.post("http://localhost:3001/visit/userRegister", {
      userName: userName,
      userPassword: userPassword,
      userID: userID,
      userEmail: userEmail,
      userGender: userGender,
      //userAddress: userAddress,
      userState: userState,
      userCity: userCity,
      userStreet: userStreet,
      userApt: userApt,
      userZipcode: userZipcode,
    }).then((response) => {
      if (response.data.message === "Wrong") {
        alert("UserID exsits or out of range ! ");
      } else {
        alert("register successful!");
        navigate("/login");
        //problem
      }
    });
  };
  const removeSession = () => {
    localStorage.removeItem("ID");
    localStorage.removeItem("staffID");
  };
  // front end input is userName, userPassword
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
          <Link to="/" onChange={removeSession}>
            Logout
          </Link>
        </li>
      </ul>

      <div className="Content">
        <h1>Registration</h1>
        <h2>😉User Info</h2>
        <label>UserID</label>
        <input
          type="text"
          name="userid"
          placeholder="UserID..."
          maxLength={8}
          onChange={(event) => {
            setuserID(event.target.value);
          }}
        ></input>
        <label>UserName</label>
        <input
          type="text"
          placeholder="UserName..."
          onChange={(event) => {
            setuserName(event.target.value);
          }}
        ></input>
        <label>password</label>
        <input
          type="password"
          placeholder="Password..."
          onChange={(event) => {
            setuserPassword(event.target.value);
          }}
        ></input>
        <label>UserEmail</label>
        <input
          type="email"
          name="useremail"
          placeholder="UserEmail..."
          onChange={(event) => {
            setuserEmail(event.target.value);
          }}
        ></input>
        <label>gender</label>
        <input
          type="text"
          placeholder="UserGender..."
          onChange={(event) => {
            setuserGender(event.target.value);
          }}
        ></input>
        <h2>🌍Address Info</h2>

        <label>State</label>
        <input
          type="text"
          placeholder="user state..."
          onChange={(event) => {
            setuserState(event.target.value);
          }}
        ></input>
        <label>City</label>
        <input
          type="text"
          placeholder="user city..."
          onChange={(event) => {
            setuserCity(event.target.value);
          }}
        ></input>
        <label>Street</label>
        <input
          type="text"
          placeholder="user street..."
          onChange={(event) => {
            setuserStreet(event.target.value);
          }}
        ></input>
        <label>Apt</label>
        <input
          type="text"
          placeholder="apartment..."
          onChange={(event) => {
            setuserApt(event.target.value);
          }}
        ></input>
        <label>Zipcode</label>
        <input
          type="text"
          placeholder="address zipcode..."
          onChange={(event) => {
            setuserZipcode(event.target.value);
          }}
        ></input>
        <button onClick={registered}>😀 Register</button>
      </div>
    </div>
  );
};

export default Register;
