import React from "react"
import { Card } from "react-bootstrap"

const Movie = ({ title, poster_path, description }) => {
  const img_api = "https://image.tmdb.org/t/p/w1280"
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img_api + poster_path} alt="movie_poster" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Movie;