import React from "react";
import { Navbar, Container, Button, Row, Col } from "react-bootstrap";
import { _createCookie, _readCookie, _eraseCookie } from "./Network";
import { users } from "../users";
import "../styles/Navbar.css";

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
