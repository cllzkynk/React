import React from "react";

const AboutItem = (props) => {
  return (
    <div className="col-md-4 text-center tileBox">
      <div className="txtHead">
        <i className={`fa fa-${props.icon}`}></i>
        <h3>{props.title}</h3>
      </div>
      <p>{props.desc}</p>
    </div>
  );
};

export default AboutItem;
