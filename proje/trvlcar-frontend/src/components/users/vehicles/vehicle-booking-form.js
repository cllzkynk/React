import React from "react";
import {
  Container,
  Form,
  Row,
  Col,
  FloatingLabel,
  InputGroup,
  Button,
} from "react-bootstrap";
import SectionHeader from "../common/section-header/section-header";

const VehicleBookingForm = () => {
  return (
    <>
      <SectionHeader title="Booking Form" />
      <Form>
        <Container>
          <Row>
            <Col md={6}>
              <FloatingLabel label="Pickup Location" className="mb-3">
                <Form.Control type="text" placeholder="Pickup Location" />
              </FloatingLabel>

              <FloatingLabel label="Dropoff Location" className="mb-3">
                <Form.Control type="text" placeholder="Dropoff Location" />
              </FloatingLabel>

              <InputGroup className="mb-3">
                <FloatingLabel label="Pickup Date" className="flex-grow-1">
                  <Form.Control type="date" placeholder="Pickup Date" />
                </FloatingLabel>

                <FloatingLabel label="Time">
                  <Form.Control type="time" placeholder="Pickup Time" />
                </FloatingLabel>
              </InputGroup>

              <InputGroup className="mb-3">
                <FloatingLabel label="Dropoff Date" className="flex-grow-1">
                  <Form.Control type="date" placeholder="Dropoff Date" />
                </FloatingLabel>

                <FloatingLabel label="Time">
                  <Form.Control type="time" placeholder="Dropoff Time" />
                </FloatingLabel>
              </InputGroup>
            </Col>
            <Col md={6}>
              <FloatingLabel label="Card Number" className="mb-3">
                <Form.Control type="text" placeholder="Card Number" />
              </FloatingLabel>

              <FloatingLabel label="Name on Card" className="mb-3">
                <Form.Control type="text" placeholder="Name on Card" />
              </FloatingLabel>

              <InputGroup className="mb-3">
                <FloatingLabel label="Expire Date" className="flex-grow-1">
                  <Form.Control type="text" placeholder="Expire Date" />
                </FloatingLabel>

                <FloatingLabel label="CVC" className="flex-grow-1">
                  <Form.Control type="text" placeholder="CVC" />
                </FloatingLabel>
              </InputGroup>

              <Form.Check
                type="checkbox"
                label="I have read and aggree the sales contract"
                id="contract"
              />
            </Col>
            <Col className="text-center">
                <Button variant="primary" size="lg" type="submit">Book Now</Button>
            </Col>
          </Row>
        </Container>
      </Form>
    </>
  );
};

export default VehicleBookingForm;
