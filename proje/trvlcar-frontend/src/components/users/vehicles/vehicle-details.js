import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./vehicle-details.css";
import { RiGasStationFill, RiCarLine, RiCaravanLine } from "react-icons/ri";
import { IoIosSnow } from "react-icons/io";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import { GiJoystick, GiCalendarHalfYear } from "react-icons/gi";

const VehicleDetails = ({ vehicle }) => {
  const {
    id,
    image,
    pricePerHour,
    model,
    fuelType,
    airConditioning,
    doors,
    luggage,
    seats,
    transmission,
    age
  } = vehicle;

  console.log(vehicle);

  const imageSrc = `${process.env.REACT_APP_API_URL}/files/display/${image[0]}`;

  return (
    <Container className="vehicle-details">
      <Row className="align-items-center">
        <Col md={6}>
          <img src={imageSrc} className="img-fluid" alt={model} />
          <div className="price">
            ${pricePerHour} <span> per hour</span>
          </div>
        </Col>
        <Col md={6}>
          <ul>
            <li>
              <RiGasStationFill /> {fuelType}
            </li>
            {airConditioning && (
              <li>
                <IoIosSnow /> Air Conditioning
              </li>
            )}
            <li>
              <RiCarLine /> {doors} doors
            </li>
            <li>
              <RiCaravanLine /> {luggage} lt
            </li>
            <li>
              <MdOutlineAirlineSeatReclineExtra /> {seats} seats
            </li>
            <li>
              <GiJoystick /> {transmission} transmission
            </li>
            <li>
              <GiCalendarHalfYear /> Age {age}
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default VehicleDetails;
