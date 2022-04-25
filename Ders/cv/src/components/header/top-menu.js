import React from "react";

const TopMenu = () => {
  return (
    <ul className="nav navbar-nav" id="mainNav">
      <li className="active">
        <a href="#home" className="scroll-link">
          Home
        </a>
      </li>
      <li>
        <a href="#aboutUs" className="scroll-link">
          About Us
        </a>
      </li>
      <li>
        <a href="#skills" className="scroll-link">
          Skills
        </a>
      </li>
      <li>
        <a href="#experience" className="scroll-link">
          Experience
        </a>
      </li>
      <li>
        <a href="#portfolio" className="scroll-link">
          Portfolio
        </a>
      </li>
      <li>
        <a href="#contactUs" className="scroll-link">
          Contact Us
        </a>
      </li>
    </ul>
  );
};

export default TopMenu;
