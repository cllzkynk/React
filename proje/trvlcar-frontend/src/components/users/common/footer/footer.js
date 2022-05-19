import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../../assets/img/logo/logo.png";
import ContactBar from "../header/contact-bar";
import SocialBar from "../header/social-bar";
import "./footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <Container>
        <Row>
          <Col md={6}>
            <h4>About Us</h4>
            <img src={logo} className="img-fluid" />
            <p>
              Check out our new fleet of cars, latest offers, our advantages and
              free extras online. Choose from one of our new car models.
            </p>
            <SocialBar/>
          </Col>
          
          <Col md={3}>
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/vehicles">Cars</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h4>Contact Us</h4>
            <ContactBar/>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
