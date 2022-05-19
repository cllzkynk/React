import React from "react"
import { Route, Routes } from "react-router-dom"
import LoginForm from "../components/LoginForm"
import MovieDetails from "../components/MovieDetails"
import Search from "../components/Search"
import PrivateRoute from "./PrivateRoute"

const CustomRoutes = () => {
  return (
    <Routes>
      <Route
        path="/movie/:movieId"
        element={
          <PrivateRoute>
            <MovieDetails />
          </PrivateRoute>
        }
      />
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <Search />
          </PrivateRoute>
        }
      />
      <Route path="/" element={<LoginForm />} />
    </Routes>
  )
}

export default CustomRoutes;