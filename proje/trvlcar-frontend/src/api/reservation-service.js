import axios from "axios";
import authHeader from "./auth-header";

const API_URL = process.env.REACT_APP_API_URL;

const isVehicleAvailable = (dto) => {
  const { carId, pickUpDateTime, dropOffDateTime } = dto;
  return axios.get(
    `${API_URL}/reservations/auth?carId=${carId}&pickUpDateTime=${pickUpDateTime}&dropOffDateTime=${dropOffDateTime}`,
    { headers: authHeader() }
  );
};

const createReservation = (reservation) => {
  const { carId } = reservation;
  delete reservation.carId;

  return axios.post(`${API_URL}/reservations/add?carId=${carId}`, reservation, {
    headers: authHeader(),
  });
};

const getReservations = () => {
  return axios.get(`${API_URL}/reservations/auth/all`, {
    headers: authHeader(),
  });
};

const getReservation = (id) => {
  return axios.get(`${API_URL}/reservations/${id}/auth`, {
    headers: authHeader(),
  });
};

export { isVehicleAvailable, createReservation, getReservations, getReservation };
