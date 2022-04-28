import React, { useEffect, useState } from "react";
import { Card, Container, Button } from "react-bootstrap";
const RandomImage = () => {
  const [number, setNumber] = useState(1);
  const [message, setMessage] = useState("");
  let image = "image1.jpg";
  if (number >= 8) {
    image = "image1.jpg";
  } else if (number >= 4) {
    image = "image2.jpg";
  } else {
    image = "image3.jpg";
  }
  const getRandomNumber = () => {
    // Math.random()*(ust-alt+1) + alt
    const randomNumber = Math.floor(Math.random() * 10 + 1);
    setNumber(randomNumber);
  };
  return (
    <Container>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={require(`../assets/img/${image}`)} />
        <Card.Body>
          <Card.Title>Random number: {number}</Card.Title>
          <Button variant="primary" onClick={getRandomNumber}>
            Change
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};
export default RandomImage;
