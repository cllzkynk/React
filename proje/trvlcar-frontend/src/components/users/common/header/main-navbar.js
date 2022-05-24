import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../../../assets/img/logo/logo.png";
import {RiHome3Line, RiCarLine, RiInformationLine, RiMapPinLine} from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import "./main-navbar.css";
import UserMenu from "./user-menu";

const MainNavbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  return (
    <Navbar expand="lg" className="main-navbar" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="TRVLCars Rental Car" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className={currentPath === "/" ? "active" : ""}>
              <RiHome3Line/> Home
            </Nav.Link>
            <Nav.Link as={Link} to="/vehicles" className={currentPath === "/vehicles" ? "active" : ""}>
             <RiCarLine/> Cars
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className={currentPath === "/about" ? "active" : ""}>
              <RiInformationLine/> About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className={currentPath === "/contact" ? "active" : ""}>
              <RiMapPinLine/> Contact
            </Nav.Link>
            <UserMenu/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
