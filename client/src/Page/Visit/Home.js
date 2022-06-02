import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Homes() {
  const removeSession = () => {
    localStorage.removeItem("ID");
    localStorage.removeItem("staffID");
  };
  return (
    <div className="container">
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

      <div className="content">
        <h1>Welcome to Whole Farm！</h1>
        <h2>
          You can choose and find so much infomation about the best food from
          Farm🥗！
        </h2>
        <h3>😀Project presented by Zhen Qi and QuanJiang Long! #Group 9</h3>
      </div>
    </div>
  );
}

export default Homes;
