import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../../../assets/img/logo/logo.png";
import {RiHome3Line, RiCarLine, RiInformationLine, RiMapPinLine, RiUserLine} from "react-icons/ri";
import { Link } from "react-router-dom";
const MainNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="TRVLCars Rental Car" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              <RiHome3Line/> Home
            </Nav.Link>
            <Nav.Link as={Link} to="/vehicles">
             <RiCarLine/> Cars
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              <RiInformationLine/> About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              <RiMapPinLine/> Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/auth">
              <RiUserLine/> Login/Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default MainNavbar;