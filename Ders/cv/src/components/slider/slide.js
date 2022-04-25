import React from "react";

const Slide = (props) => {
  return (
    <div className="da-slide">
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
      <div className="da-img"></div>
    </div>
  );
};

export default Slide;
