import React from "react";
import { Container } from "react-bootstrap";

const Map = () => {
  return (
    <Container>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d861.0978870752738!2d-81.57654233765459!3d30.311378735015907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e5b44f2ae7c029%3A0xa42982e8ce213fef!2sCherry%20Tree%20Ct%2C%20Jacksonville%2C%20FL%2032216%2C%20USA!5e0!3m2!1sen!2str!4v1652985266757!5m2!1sen!2str"
        width="100%"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Container>
  );
};

export default Map;
