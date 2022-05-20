import axios from "axios";
import authHeader from "./auth-header";

const API_URL = process.env.REACT_APP_API_URL;

const login = (credentials) => {
    return axios.post(`${API_URL}/login`, credentials);
}


const getUser = () => {
    return axios.get(`${API_URL}/user`, { headers:  authHeader() });
}

export {login, getUser};