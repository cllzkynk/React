import axios from "axios";
import React, { useState } from "react";
import { Button, Container, Form, Alert, Spinner } from "react-bootstrap";

const Form4 = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    web: "",
  });
  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(false);


  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidated(true);

    if (e.target.checkValidity() === false) {
      return;
    }

    setLoading(true);
    setTimeout(() => {
      // Burası fake API, sanki API endpoint e bağlanmış gibi yapmak için
      // setTimeout kullandık.

      setLoading(false);
      alert("Data gönderildi");
    }, 2000);


  };

  return (
    <Container className="mt-5">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Ad</Form.Label>
          <Form.Control
            required
            minLength={2}
            maxLength={25}
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleFormData}
          />

<Form.Control.Feedback type="invalid">
             Gecerli bir isim giriniz.
            </Form.Control.Feedback>

            <Form.Control.Feedback type="valid">
             Isim gecerli
            </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Soyad</Form.Label>
          <Form.Control
            required
            minLength={2}
            maxLength={25}
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleFormData}
          />
          <Form.Control.Feedback type="invalid">
             Gecerli bir soyisim giriniz.
            </Form.Control.Feedback>
            
            <Form.Control.Feedback type="valid">
             Soyisim gecerli
            </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            name="email"
            type="email"
            value={formData.email}
            onChange={handleFormData}
          />
          <Form.Control.Feedback type="invalid">
             Gecerli bir mail giriniz.
            </Form.Control.Feedback>
            
            <Form.Control.Feedback type="valid">
             Mail gecerli
            </Form.Control.Feedback>
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
          <Form.Label>Web Site</Form.Label>
          <Form.Control
            name="web"
            type="text"
            value={formData.web}
            onChange={handleFormData}
          />
        </Form.Group>

        <Button variant="warning" type="submit" disabled={loading}>
          {loading && <Spinner animation="border" size="sm" />}
           Gönder
        </Button>
      </Form>
    </Container>
  );
};

export default Form4;