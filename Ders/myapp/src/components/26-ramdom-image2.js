import React, { useEffect, useState } from "react";
import { Card, Container, Button } from "react-bootstrap";
const RandomImage2 = () => {
  const [number, setNumber] = useState(1);
  const getRandomNumber = () => {
    // Math.random()*(ust-alt+1) + alt
    const randomNumber = Math.floor(Math.random() * 10 + 1);
    setNumber(randomNumber);
  };
  return (
    <Container>
      <Card style={{ width: "18rem" }}>
        {number >= 7 ? (
          <Card.Img variant="top" src={require("../assets/img/image1.jpg")} />
        ) : number >= 4 ? (
          <Card.Img variant="top" src={require("../assets/img/image2.jpg")} />
        ) : (
          <Card.Img variant="top" src={require("../assets/img/image3.jpg")} />
        )}
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
export default RandomImage2;
