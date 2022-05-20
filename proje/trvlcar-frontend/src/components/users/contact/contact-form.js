import { useFormik } from "formik";
import React, { useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { toast } from "react-toastify";
import * as Yup from "yup";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const initialValues = {
    fullName: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Please enter your full name"),
    email: Yup.string().email().required("Please enter your email"),
    message: Yup.string().required("Please enter your message"),
  });

  const onSubmit = (values) => {
    setLoading(true);

    setTimeout(() => {
      toast("Your message sent successfully");
      setLoading(false);
    }, 1000);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <>
      <h3>Send Message</h3>
      <Form noValidate onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            {...formik.getFieldProps("fullName")}
            isInvalid={formik.touched.fullName && formik.errors.fullName}
            isValid={formik.touched.fullName && !formik.errors.fullName}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.fullName}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            {...formik.getFieldProps("email")}
            isInvalid={formik.touched.email && formik.errors.email}
            isValid={formik.touched.email && !formik.errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.email}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            {...formik.getFieldProps("message")}
            isInvalid={formik.touched.message && formik.errors.message}
            isValid={formik.touched.message && !formik.errors.message}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.message}
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" disabled={loading} type="submit">
          {loading && <Spinner animation="border" size="sm" />}
          Send Message
        </Button>
      </Form>
    </>
  );
};

export default ContactForm;
