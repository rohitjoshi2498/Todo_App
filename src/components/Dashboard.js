import { React, useEffect } from "react";
import { Card, Row } from "react-bootstrap";
import { users } from "../users";
import { _createCookie, _readCookie, _eraseCookie } from "./Network";
import Navigation from "./Navbar";
import TodoForm from "./Todo";

const Dashboard = () => {
  useEffect(() => {
    if (!_readCookie("token")) window.location.replace("/login/");
  }, []);

  return (
    <div style={{ display: "inline" }} className="dashboard">
      <Row>
        <Navigation />
      </Row>
      <Row
        style={{
          marginBottom: "2%",
          height: "100%",
          alignContent: "center",
          display: "inline",
        }}
      >
        <Card className="todocard" style={{ alignItems: "center" }}>
          <TodoForm></TodoForm>
        </Card>
      </Row>
    </div>
  );
};

export default Dashboard;
