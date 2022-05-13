import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Button, Container, Form, Spinner } from "react-bootstrap";
import axios from "axios";
import { useStore } from "../store";
import { loginSuccess } from "../store/user/userActions";
import {useNavigate} from "react-router-dom";


const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const { dispatchUser } = useStore();
  const navigate = useNavigate();

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

    const API_URL = "https://car-rental-x.herokuapp.com/car-rental/api";

    setLoading(true);
    axios
      .post(`${API_URL}/login`, values)
      .then((resp) => {
        console.log(resp.data);

        const token = resp.data.token;
        const authHeader = {Authorization: "Bearer " + token};

        axios(`${API_URL}/user`, {headers: authHeader})
          .then((respUser) => {
            setLoading(false);
            console.log(respUser.data);
            dispatchUser(loginSuccess(respUser.data));
navigate("/");

          })
          .catch((err) => {
            alert(err.response.data.message);
          });
      })
      .catch((err) => {
        setLoading(false);
        alert(err.response.data.message);
        console.log(err.response.data);
      });
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

        <Button variant="warning" type="submit" disabled={loading}>
          {loading && <Spinner animation="border" size="sm" />} Login
        </Button>
      </Form>
    </Container>
  );
};

export default LoginPage;
