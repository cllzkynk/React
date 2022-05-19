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
        <a href="https://www.facebook.com/" target="_blank">
          <RiFacebookFill />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/" target="_blank">
          <RiTwitterFill />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/" target="_blank">
          <RiInstagramFill />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/" target="_blank">
          <RiWhatsappFill />
        </a>
      </li>
      <li>
        <a href="https://web.whatsapp.com/" target="_blank">
          <RiLinkedinFill />
        </a>
      </li>
    </ul>
  );
};
export default SocialBar;