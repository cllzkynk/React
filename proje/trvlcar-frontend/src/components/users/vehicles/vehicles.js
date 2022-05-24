import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useStore } from "../../../store";
import VehicleCard from "../common/vehicle-card/vehicle-card";

const Vehicles = () => {
  const { vehicleState } = useStore();
  const { vehicles } = vehicleState;
  return (
    <Container>
      <Row className="g-4">
        {vehicles.map((vehicle, index) => (
          <Col key={index} md={6} lg={3}>
            <VehicleCard vehicle={vehicle} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Vehicles;
