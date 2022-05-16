import React from "react";
import { RiHeadphoneLine, RiMailOpenLine, RiMapPinLine } from "react-icons/ri";
const ContactBar = () => {
  return (
    <ul className="contact-bar">
      <li>
        <RiHeadphoneLine />
        <div>
          <a href="tel:905555555555">(555)-555-5555</a>
          <br /><a href="tel:905555555555">(555)-555-5555</a>
        </div>
      </li>
      <li>
        <RiMailOpenLine />
        <div>
          <a href="mailto:info@trvlcar.com">info@trvlcar.com</a>
          <br /><a href="mailto:support@trvlcar.com">support@trvlcar.com</a>
        </div>
      </li>
      <li>
        <RiMapPinLine />
        <div>
          sjkhsdjfhsjkdfhksdf
          <br />
          Florida USA
        </div>
      </li>
    </ul>
  );
};
export default ContactBar;
