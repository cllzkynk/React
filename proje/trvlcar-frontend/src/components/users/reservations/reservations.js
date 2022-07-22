import moment from "moment";
import React, { useEffect, useState } from "react";
import { Container, Spinner, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getReservations } from "../../../api/reservation-service";

const Reservations = () => {
  const [loading, setLoading] = useState(true);
  const [reservations, setReservations] = useState([]);
  const navigate = useNavigate();

  const loadData = async () => {
    try {
      const resp = await getReservations();
      console.log(resp.data);
      setReservations(resp.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleClick = (id) => {
    navigate(`/user/reservations/${id}`);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Car</th>
            <th>Pick up</th>
            <th>Drop off</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {loading && (
            <tr>
              <td colSpan={5}>
                <Spinner animation="border" size="sm" /> Loading...
              </td>
            </tr>
          )}

          {reservations.map((reservation, index) => (
            <tr key={index} onClick={ ()=>handleClick(reservation.id)}>
              <td>{index + 1}</td>
              <td>{reservation.car.model}</td>
              <td>{moment(reservation.pickUpTime).format("llll")}</td>
              <td>{moment(reservation.dropOfTime).format("llll")}</td>
              <td>{reservation.status}</td>
            </tr>
          ))}

          { !loading && reservations.length <= 0 && (
            <tr className="table-warning">
              <td colSpan={5}>No reservation</td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export default Reservations;
