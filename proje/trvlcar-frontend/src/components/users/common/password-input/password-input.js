import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const PasswordInput = (props) => {
  const [type, setType] = useState("password");

  const handleType = () => {
    setType(type === "password" ? "text" : "password");
  };

  return (
    <InputGroup className="mb-3">
      <Form.Control type={type} {...props} />

      <InputGroup.Text id="basic-addon2">
        {type === "password" ? (
          <BsEye onClick={handleType} />
        ) : (
          <BsEyeSlash onClick={handleType} />
        )}
      </InputGroup.Text>
      <Form.Control.Feedback type="invalid">
        {props.error}
      </Form.Control.Feedback>
    </InputGroup>
  );
};

export default PasswordInput;
