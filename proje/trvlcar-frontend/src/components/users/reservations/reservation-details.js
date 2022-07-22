import React, { useEffect, useState } from "react";
import {
  Accordion,
  Button,
  Col,
  Container,
  Image,
  Row,
  Table,
} from "react-bootstrap";
import { getReservation } from "../../../api/reservation-service";
import { FiCheck, FiCrosshair, FiArrowLeft, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const ReservationDetails = ({ reservationId }) => {
  const [reservation, setReservation] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const loadData = async () => {
    try {
      const resp = await getReservation(reservationId);
      setReservation(resp.data);
      console.log(resp.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  if (Object.keys(reservation).length > 0)
    return (
      <Container>
        <Row>
          <Col md={6}>
            <h2 className="text-center">{reservation.car.model}</h2>
            <Image
              src={`${process.env.REACT_APP_API_URL}/files/display/${reservation.car.image[0]}`}
              className="img-fluid"
            />
            <Button
              variant="primary"
              className="mt-3"
              onClick={() => navigate(-1)}
            >
              <FiArrowLeft /> Back to reservations
            </Button>
          </Col>
          <Col md={6}>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Reservation Details</Accordion.Header>
                <Accordion.Body>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th colSpan={2}>
                          <h3>${reservation.totalPrice}</h3>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>Pick up Location</th>
                        <td>{reservation.pickUpLocation}</td>
                      </tr>
                      <tr>
                        <th>Drop off Location</th>
                        <td>{reservation.dropOfLocation}</td>
                      </tr>
                      <tr>
                        <th>Pick up Time</th>
                        <td>{reservation.pickUpTime}</td>
                      </tr>
                      <tr>
                        <th>Drop off Time</th>
                        <td>{reservation.dropOfTime}</td>
                      </tr>
                      <tr>
                        <th>Status</th>
                        <td>{reservation.status}</td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Car Details</Accordion.Header>
                <Accordion.Body>
                  <Table striped bordered hover>
                    <tbody>
                      <tr>
                        <td>Model</td>
                        <td>{reservation.car.model}</td>
                      </tr>
                      <tr>
                        <td>Doors</td>
                        <td>{reservation.car.doors}</td>
                      </tr>
                      <tr>
                        <td>Seats</td>
                        <td>{reservation.car.seats}</td>
                      </tr>
                      <tr>
                        <td>Luggage</td>
                        <td>{reservation.car.luggage}</td>
                      </tr>
                      <tr>
                        <td>Transmission</td>
                        <td>{reservation.car.transmission}</td>
                      </tr>
                      <tr>
                        <td>Air Conditioning</td>
                        <td>
                          {reservation.car.airConditioning ? (
                            <FiCheck />
                          ) : (
                            <FiCrosshair />
                          )}
                        </td>
                      </tr>
                      <tr>
                        <td>Fuel Type</td>
                        <td>{reservation.car.fuelType}</td>
                      </tr>
                      <tr>
                        <td>Age</td>
                        <td>{reservation.car.age}</td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    );
};

export default ReservationDetails;
