import React from "react";
import { Carousel } from "react-bootstrap";
import arka1 from "../assets/img/arka1.jpg";
import arka2 from "../assets/img/arka2.jpg";
import arka3 from "../assets/img/arka3.jpg";

const Akis = () => {
  return (
    <Carousel className="akis">
      <Carousel.Item>
        <img className="d-block w-100" src={arka1} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 rsm" src={arka2} alt="Second slide" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={arka3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Akis;
