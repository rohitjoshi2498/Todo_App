import React from "react";
import { _eraseCookie } from "./Network";
import {users } from "../users";
import "../styles/Navbar.css";
// eslint-disable-next-line 
const Navigation = () => {
  const signout = () => {
    _eraseCookie("token");
    window.location.replace("/login/");
  };
  return (
    <div class="topnav">
      <a>
        <b>{users[0].name}</b>
      </a>
      <a onClick={signout} class="split">
        Logout
      </a>
    </div>
  );
};
export default Navigation;
