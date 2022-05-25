import React from "react";
import { Carousel } from "react-bootstrap";
import "./slider.css";
import slides from "./slider.json";

const Slider = () => {
  return (
    <Carousel fade className="slider">
      {slides.map((slide, index) => {

        let image = require(`../../../../assets/img/slider/${slide.image}`);

        return (
          <Carousel.Item
          
            key={index}
            style={{ backgroundImage: `url(${image})` }}
          >
            <Carousel.Caption>
              <h3>{slide.title}</h3>
              <p>{slide.desc}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default Slider;
