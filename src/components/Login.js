import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { _createCookie, _readCookie } from "./Network";
import { users, generateRandomCode } from "../users";
import "../styles/Login.css";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error_msg, seterror_msg] = useState(false);

  useEffect(() => {
    if (_readCookie("token")) window.location.replace("/dashboard/");
  }, []);
  const handleLogin = (e) => {
    e.preventDefault();
    if (username === users[0]["username"] && password === users[0]["password"]) {
      _createCookie("token", generateRandomCode(10), 1);
      window.location.replace("/dashboard/");
    } else {
      seterror_msg(true);
    }
  };

  return (
    <Card style={{ marginTop: "5%" }}>
      <div className="login-container">
        <h1 style={{ marginTop: "0%" }}>Login</h1>
        <form onSubmit={(e) => handleLogin(e)}>
          {error_msg && (
            <div style={{ marginBottom: "2%", color: "red", fontSize: "18px" }}>
              *Invalid Credentials
            </div>
          )}
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="login-btn" type="submit">
            Login
          </button>
        </form>
      </div>
    </Card>
  );
};

export default Login;
