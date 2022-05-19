import axios from "axios"

const getPopularMovies = () => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=21421ae36e26490a5def79ba1e184fd6`
  )
}

const searchMovies = (query) => {
  return axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=21421ae36e26490a5def79ba1e184fd6&query=${query}`
  )
}
const getMovieDetail = (id) => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=21421ae36e26490a5def79ba1e184fd6`
  )
}
export { searchMovies, getPopularMovies, getMovieDetail }

