import React, { useState } from "react";
import { Button, Container, Form, Alert } from "react-bootstrap";

const Form3 = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email:"",
    web:""
  });


  const handleFormData = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
    console.log(formData);
  };

  

  return (
    <Container className="mt-5">
      <Form>
        <Alert variant="danger">Telefon numaranızı giriniz</Alert>
 
        <Form.Group className="mb-3">
          <Form.Label>Ad</Form.Label>
          <Form.Control
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleFormData}
          />
        </Form.Group>
 
        <Form.Group className="mb-3">
          <Form.Label>Soyad</Form.Label>
          <Form.Control
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleFormData}
          />
        </Form.Group>
 
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            type="email"
            value={formData.email}
            onChange={handleFormData}
          />
        </Form.Group>
 
        <Form.Group className="mb-3">
          <Form.Label>Telefon</Form.Label>
          <Form.Control
            name="phone"
            type="text"
            value={formData.phone}
            onChange={handleFormData}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Web</Form.Label>
          <Form.Control
            name="web"
            type="text"
            value={formData.web}
            onChange={handleFormData}
          />
        </Form.Group>
 
        <Button variant="warning">Gönder</Button>
      </Form>
    </Container>
  );
};
 
export default Form3;