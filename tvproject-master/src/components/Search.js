import React, { useEffect, useState } from "react"
import { Form, Button, FormControl, Row, Container, Col } from "react-bootstrap"
import { AiOutlineSearch } from "react-icons/ai"
import { useNavigate } from "react-router-dom"
import { searchMovies, getPopularMovies } from "../api/search-service"
import Movie from "./Movie"

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [movies, setMovies] = useState([])
  const navigate = useNavigate()

  const onSubmit = (e) => {
    e.preventDefault()

    if (searchTerm) {
      searchMovies(searchTerm).then((resp) => {
        setMovies(resp.data.results)
        setSearchTerm("")
      })
    }
  }

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const checkDetail = (id) => {
    console.log(id)
    navigate(`/movie/${id}`)
  }

  useEffect(() => {
    getPopularMovies()
      .then((resp) => {
        console.log(resp.data.results)
        setMovies(resp.data.results)
      })
      .catch((err) => {
        console.log("populer hatasi")
      })
  }, [])

  return (
    <>
      <div>
        <form onSubmit={onSubmit} className="d-flex">
          <Form.Control
            type="text"
            autoFocus="autofocus"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleOnChange}
          />
          <Button type="submit">
            <AiOutlineSearch />{" "}
          </Button>
        </form>
      </div>
      <Container>
        <Row>
          {movies.length > 0 &&
            movies.map((item) => (
              <Col className="m-3" onClick={() => checkDetail(item.id)}>
                <Movie key={item.id} {...item} />
              </Col>
            ))}
        </Row>
      </Container>
    </>
  )
}

export default Search;