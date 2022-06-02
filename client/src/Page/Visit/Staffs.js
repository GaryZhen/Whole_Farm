import Axios from "axios";
import React, { useState } from "react";

import "../Visit/Staffs.css";
import { useNavigate, Link } from "react-router-dom";
const Staffs = (props) => {
  const [staffID, setStaffID] = useState(0);
  const [staffPassword, setStaffPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");
  let navigate = useNavigate();

  const staffLogin = () => {
    Axios.post("http://localhost:3001/visit/staffLogin", {
      staffID: staffID,
      staffPassword: staffPassword,
    }).then((response) => {
      if (response.data.message === "yes") {
        //setLoginStatus(response.data.message);
        alert("login successful!");
        localStorage.setItem("staffID", staffID);
        navigate("/StaffCurd"); // 登录后跳转到其他界面
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
          <Link to="/">Logout</Link>
        </li>
      </ul>

      <div className="Content">
        <h1>Staff Login</h1>
        <label>StaffID</label>
        <input
          type="text"
          placeholder="StaffID..."
          maxLength={8}
          onChange={(event) => {
            setStaffID(event.target.value);
          }}
        ></input>
        <label>StaffPwd</label>
        <input
          type="password"
          placeholder="Password..."
          onChange={(event) => {
            setStaffPassword(event.target.value);
          }}
        ></input>
        <button onClick={staffLogin}> 🙋‍♂️ Login</button>
      </div>
      <h1>{loginStatus}</h1>
    </div>
  );
};

export default Staffs;
