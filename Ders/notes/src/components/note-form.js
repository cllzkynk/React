import React from "react";
import { Button, Form } from "react-bootstrap";
 
const NoteForm = () => {
  return (
    <>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Notunuzu giriniz</Form.Label>
        <Form.Control type="email"/>
      </Form.Group>
      <Button variant="warning">Ekle</Button>
    </>
  );
};
 
export default NoteForm;