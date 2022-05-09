import React, {useState} from "react";
import { Button, Form } from "react-bootstrap";
const NoteForm = ({ createNote }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const handleTitle = (e) => { 
      setTitle(e.target.value);
  }
  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>Başlık</Form.Label>
        <Form.Control type="text" value={title} onChange={handleTitle} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Açıklama</Form.Label>
        <Form.Control as="textarea" rows={3} value={desc} onChange={(e)=> setDesc(e.target.value)} />
      </Form.Group>
      <Button className="m-3"
        variant="warning"
        onClick={() =>
          createNote({
            title: title,
            body: desc,
            userId: 1,
          })
        }
      >
        Create Note 
      </Button>
    </>
  );
};
export default NoteForm;