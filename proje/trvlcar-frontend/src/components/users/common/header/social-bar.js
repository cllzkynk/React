import React from "react";
import {
  RiFacebookFill,
  RiTwitterFill,
  RiInstagramFill,
  RiWhatsappFill,
  RiLinkedinFill,
} from "react-icons/ri";


const SocialBar = () => {
  return (
    <ul className="social-bar">
      <li>
        <a href="#" target="_blank">
          <RiFacebookFill />
        </a>
      </li>
      <li>
        <a href="#" target="_blank">
          <RiTwitterFill />
        </a>
      </li>
      <li>
        <a href="#" target="_blank">
          <RiInstagramFill />
        </a>
      </li>
      <li>
        <a href="#" target="_blank">
          <RiWhatsappFill />
        </a>
      </li>
      <li>
        <a href="#" target="_blank">
          <RiLinkedinFill />
        </a>
      </li>
    </ul>
  );
};

export default SocialBar;
