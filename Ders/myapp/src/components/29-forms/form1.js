import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
 
const Form1 = () => {
    const [name, setName] = useState("");
    const [isNameValid, setIsNameValid] = useState(false);
 
  const handleName = (e) => {
    setName(e.target.value);
    if(e.target.value.length<2 || e.target.value.length>20){
        setIsNameValid(false);
    }
    else{
        setIsNameValid(true);
    }
  };
 
  return (
    <Container className="mt-5">
      <div>Merhaba {name} {isNameValid.toString()} {name.length}</div>
      <Form>
        <Form.Control
          type="text"
          value={name}
          onChange={handleName}
          placeholder="Adınızı giriniz"
          isInvalid={!isNameValid}
          isValid={isNameValid}
        />
      </Form>
    </Container>
  );
};
 
export default Form1;