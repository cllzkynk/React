import React, { useState } from "react";
import { Card, Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import "./auth.css";
import logo from "../../../assets/img/logo/logo.png";
import { RiCloseCircleLine, RiHome7Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import LoginForm from "./login-form";
import RegisterForm from "./register-form";

const Auth = () => {
  const navigate = useNavigate();
  const [defaultTab, setDefaultTab] = useState("login");

  return (
    <Container fluid className="auth">
      <Row>
        <Col md={7}>
          <img src={logo} alt="TRVLCar" />
          <div className="toolbar">
            <RiCloseCircleLine
              onClick={() => navigate(-1)}
            />
            <RiHome7Line onClick={() => navigate("/")}/>
          </div>
        </Col>
        <Col md={5}>
          <Card>
            <Card.Body>
              <Tabs
                activeKey={defaultTab}
                onSelect={(k) => setDefaultTab(k)}
                className="mb-3"
              >
                <Tab eventKey="login" title="Login">
                  <LoginForm />
                </Tab>
                <Tab eventKey="register" title="Register">
                  <RegisterForm setDefaultTab={setDefaultTab} />
                </Tab>
              </Tabs>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Auth;
