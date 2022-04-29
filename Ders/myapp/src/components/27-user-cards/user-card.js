import React from "react";
import { Card, Col } from "react-bootstrap";
const UserCard = ({data}) => {
  const {avatar_url, login, html_url} = data;
  return (
    <Col md={3}>
      <Card>
        <Card.Img variant="top" src={avatar_url} />
        <Card.Body>
          <Card.Title>
            <a href={html_url} target="_blank">
              {login}
            </a>
          </Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default UserCard;