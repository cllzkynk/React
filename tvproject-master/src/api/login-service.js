import axios from "axios"

const requestToken = () => {


  return axios.get(

    `https://api.themoviedb.org/3/authentication/token/new?api_key=21421ae36e26490a5def79ba1e184fd6`
  )
}
const login = (credentials) => {

    return axios.post(

      ` https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=21421ae36e26490a5def79ba1e184fd6`,

      credentials
    )
  }
  
 export {requestToken,login}