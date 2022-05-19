import React from 'react';
import {Form,Button} from "react-bootstrap";
import { useFormik } from "formik"
import * as Yup from "yup"
import { login, requestToken } from '../api/login-service';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const navigate=useNavigate();
   

    const initialValues = {
        username: "",
        password: "",
      }
      const onSubmit = (values) => {
        requestToken().then((resp) => {
          values["request_token"] = `${resp.data.request_token}`
          console.log(values)
          login(values).then((response) => {
            localStorage.setItem("token", resp.data.request_token)
            console.log("login başladı")
            navigate("/home")
            
          })
        })
      }
      const validationSchema = Yup.object({
        username: Yup.string().required("Please enter your user name"),
        password: Yup.string().required("Please enter your password").min(4),
      })
      const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
      })
    
      
    

 return  <div><Form noValidate onSubmit={formik.handleSubmit}
 >
 <Form.Group className="mb-3" controlId="formBasicEmail">
   <Form.Label>User Name</Form.Label>
   <Form.Control
    {...formik.getFieldProps("username")}
              isInvalid={!!formik.errors.username}
 autoFocus="autofocus" 
 type="text" 
 placeholder="username" />
 <Form.Control.Feedback type="invalid">
              {formik.errors.username}
            </Form.Control.Feedback>

   
 </Form.Group>

 <Form.Group className="mb-3" controlId="formBasicPassword">
   <Form.Label>Password</Form.Label>
   <Form.Control  {...formik.getFieldProps("password")}
              isInvalid={!!formik.errors.password} type="password" placeholder="Password" />
              <Form.Control.Feedback type="invalid">
              {formik.errors.password}
            </Form.Control.Feedback>
 </Form.Group>
 
 <Button variant="primary" type="submit">
   Submit
 </Button>
</Form></div>;
};

export default LoginForm;
