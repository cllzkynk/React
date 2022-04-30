import { Container, Row, Col } from "react-bootstrap";
import NoteForm from "./components/note-form";
import Notes from "./components/notes";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    loadNotes();
  }, []);


  const loadNotes = ( ) => { 

    axios("https://jsonplaceholder.typicode.com/posts").then((resp) =>
    setNotes(resp.data));

   };

  return (
    <Container>
      <Row>
        <Col md={3}>
          <NoteForm />
        </Col>

        <Col md={9}>
          <Notes data={notes} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
