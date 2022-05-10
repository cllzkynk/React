import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Button, Container, Form } from "react-bootstrap";
const LoginPage = () => {
  
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Geçerli bir eposta giriniz")
      .required("Eposta boş geçilemez"),
    password: Yup.string().required("Şifrenizi giriniz"),
  });
  const onSubmit = (values) => {
    console.log(values);
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  return (
    <Container className="mt-5">
      <Form noValidate onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            {...formik.getFieldProps("email")}
            isInvalid={formik.touched.email && !!formik.errors.email}
            isValid={formik.touched.email && !formik.errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.email}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            {...formik.getFieldProps("password")}
            isInvalid={formik.touched.password && !!formik.errors.password}
            isValid={formik.touched.password && !formik.errors.password}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.password}
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="warning" type="submit">Login</Button>
      </Form>
    </Container>
  );
};
export default LoginPage;
