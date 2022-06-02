import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./Page/Visit/Home";
import Staffs from "./Page/Visit/Staffs";
import Register from "./Page/Visit/Register";
import Error from "./Page/Visit/Error";
import Login from "./Page/Visit/Login";

import StaffCurd from "./Page/Staff/StaffCurd";
import UserCurd from "./Page/User/UserCurd";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Staffs" element={<Staffs />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />

        <Route path="/UserCurd" element={<UserCurd />} />
        <Route path="/StaffCurd" element={<StaffCurd />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
