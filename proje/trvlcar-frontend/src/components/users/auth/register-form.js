import React from "react";
import { Button, Form } from "react-bootstrap";
import Spacer from "../common/spacer/spacer";

const RegisterForm = () => {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Zip Code</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

        <Spacer height={20}/>
        <hr/>
        <Spacer height={20}/>

      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password Confirm</Form.Label>
        <Form.Control type="password" />
      </Form.Group>
      <Button variant="primary">Register</Button>
    </Form>
  );
};

export default RegisterForm;
