import React from "react";
import { Card } from "react-bootstrap";

const Cards = ({ ad, img, yas, kurs }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} height="200" width="100" />
      <Card.Body>
        <Card.Title>{ad}</Card.Title>
        <Card.Text>{kurs}</Card.Text>
        <h3 className="text-center">{yas}</h3>
      </Card.Body>
    </Card>
  );
};

export default Cards;
