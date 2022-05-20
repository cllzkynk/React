import React from "react";
import { RiHeadphoneLine, RiMailOpenLine, RiMapPinLine } from "react-icons/ri";

const ContactBar = () => {
  return (
    <ul className="contact-bar">
      <li>
        <RiHeadphoneLine />
        <div>
          <a href="tel:19046516572">(904)-369-8938</a>
          <br /><a href="tel:19046516572">(904)-651-6572</a>
        </div>
      </li>
      <li className="d-none d-lg-flex">
        <RiMailOpenLine />
        <div>
          <a href="mailto:info@trvlcar.com">info@trvlcar.com</a>
          <br /><a href="mailto:support@trvlcar.com">support@trvlcar.com</a>
        </div>
      </li>
      <li>
        <RiMapPinLine />
        <div>
          Cherry Tree Ct, Jacksonville, 32216
          <br />
          Florida USA
        </div>
      </li>
    </ul>
  );
};

export default ContactBar;
