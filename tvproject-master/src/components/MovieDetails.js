import React, { useEffect, useState } from "react"
import { Col, Container, Row, Button } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import { getMovieDetail } from "../api/search-service"
import { IoMdReturnLeft } from "react-icons/io"

const IMG_API = "https://image.tmdb.org/t/p/w500"

const MovieDetails = () => {
  const [movie, setMovie] = useState({})
  const { movieId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    getMovieDetail(movieId).then((resp) => {
      setMovie(resp.data)
      console.log(resp.data)
      console.log(movie.poster_path)
    })
  }, [])
  const returnBack = () => {
    navigate("/home")
  }

  return (
    <div>
      <Button className="mb-3" onClick={returnBack}>
        <IoMdReturnLeft /> Return Back
      </Button>
      <Container>
        <Row>
          <Col className="col-img" lg={7}>
            <div className="div-img">
              <img src={IMG_API + movie.poster_path} alt={movie.title} />
            </div>
          </Col>

          <Col className="col-details" lg={5}>
            <div className="details">
              <ul>
                <li className="title">
                  <h3>{movie.title}</h3>{" "}
                </li>
                <li>{movie.overview}</li>
                <li>IMDB Vote: {movie.vote_average}</li>
                <li>Budget: {movie.budget}</li>
                <li>Time: {movie.runtime} Minute</li>
                <li>Popularity: {movie.popularity}</li>
                <li>Release Date: {movie.release_date}</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default MovieDetails;