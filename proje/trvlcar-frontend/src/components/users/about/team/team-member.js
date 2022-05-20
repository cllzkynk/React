import React from "react";
import { Card } from "react-bootstrap";

const TeamMember = ({ image, name, title }) => {
  const imageSrc = require(`../../../../assets/img/team/${image}`);

  return (
    <Card>
      <Card.Img variant="top" src={imageSrc} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{title}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default TeamMember;
