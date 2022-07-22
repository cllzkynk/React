import React, { useState } from "react";
import {
  Container,
  Form,
  Row,
  Col,
  FloatingLabel,
  InputGroup,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import MaskedInput from "react-maskedinput";
import SectionHeader from "../common/section-header/section-header";
import moment from "moment";
import {
  createReservation,
  isVehicleAvailable,
} from "../../../api/reservation-service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const VehicleBookingForm = ({ vehicle }) => {
  const [loading, setLoading] = useState(false);
  const [isCarAvailable, setIsCarAvailable] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  const initialValues = {
    pickUpLocation: "",
    dropOfLocation: "",
    pickUpDate: "",
    pickUpTime: "",
    dropOffDate: "",
    dropOffTime: "",
    cardNo: "",
    nameOnCard: "",
    expireDate: "",
    cvc: "",
    contract: false,
  };

  const validationSchema = Yup.object({
    pickUpLocation: Yup.string().required("Enter a pick up place please."),
    dropOfLocation: Yup.string().required("Enter a drop off place please."),
    pickUpDate: Yup.string().required("Select a pick up date please."),
    pickUpTime: Yup.string().required("Select a pick up time please."),
    dropOffDate: Yup.string()
      .required("Select a drop off date please.")
      .test(
        "date-time",
        "Dropoff date-time should get after the pickup date-time",
        (value, context) =>
          checkDates({
            dropOffDate: value,
            pickUpDate: context.parent.pickUpDate,
            dropOffTime: context.parent.dropOffTime,
            pickUpTime: context.parent.pickUpTime,
          })
      ),
    dropOffTime: Yup.string().required("Select a drop off time please."),
    cardNo: Yup.string().required("Please enter the card number"),
    nameOnCard: Yup.string().required("Please enter the name of card"),
    expireDate: Yup.string()
      .required("Please enter the expire date")
      .test("month_check", "Enter a valid expire date (MM/YY)", (value) => {
        if(!value) return true;
        const date = moment(`30/${value}`, "DD/MM/YY");
        if (!date.isValid()) return false;
        if (date < new Date()) return false;
        return true;
      }),
    cvc: Yup.number()
      .typeError("Must be number")
      .required("Please enter the cvc"),
    contract: Yup.boolean().oneOf(
      [true],
      "Please read the contract and check the box"
    ),
  });

  const onSubmit = async (values) => {
    const {
      pickUpLocation,
      dropOfLocation,
      pickUpDate,
      pickUpTime,
      dropOffDate,
      dropOffTime,
    } = values;

    const dto = {
      carId: vehicle.id,
      pickUpTime: formatDateTime(pickUpDate, pickUpTime),
      dropOfTime: formatDateTime(dropOffDate, dropOffTime),
      pickUpLocation: pickUpLocation,
      dropOfLocation: dropOfLocation,
    };

    setLoading(true);

    try {
      await createReservation(dto);
      toast("Reservation created successfully");
      navigate("/");
    } catch (err) {
      toast(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const checkTheCarIsAvailable = async () => {
    const { pickUpDate, pickUpTime, dropOffDate, dropOffTime } = formik.values;

    if (!pickUpDate || !pickUpTime || !dropOffDate || !dropOffTime) return;
    try {
      if (!checkDates(formik.values))
        throw "Dropoff date-time should get after the pickup date-time";

      const dto = {
        carId: vehicle.id,
        pickUpDateTime: formatDateTime(pickUpDate, pickUpTime),
        dropOffDateTime: formatDateTime(dropOffDate, dropOffTime),
      };

      setLoading(true);

      const resp = await isVehicleAvailable(dto);
      const { isAvailable, totalPrice } = resp.data;

      setIsCarAvailable(isAvailable);
      setTotalPrice(totalPrice);

      if (!isAvailable) {
        toast(
          "The car you selected is not available in these days. Please select another one"
        );
      }
    } catch (err) {
      toast(err || err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const formatDateTime = (date, time) => {
    return moment(`${date} ${time}`).format("MM/DD/YYYY HH:mm:ss");
  };

  const checkDates = (values) => {
    const { pickUpDate, pickUpTime, dropOffDate, dropOffTime } = values;
    const d1 = formatDateTime(pickUpDate, pickUpTime);
    const d2 = formatDateTime(dropOffDate, dropOffTime);
    return d2 > d1;
  };

  return (
    <>
      <SectionHeader title="Booking Form" />
      <Form noValidate onSubmit={formik.handleSubmit}>
        <Container>
          <Row>
            <Col md={isCarAvailable ? 6 : 12}>
              <FloatingLabel label="Pickup Location" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Pickup Location"
                  {...formik.getFieldProps("pickUpLocation")}
                  isInvalid={
                    formik.touched.pickUpLocation &&
                    formik.errors.pickUpLocation
                  }
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.pickUpLocation}
                </Form.Control.Feedback>
              </FloatingLabel>

              <FloatingLabel label="Dropoff Location" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Dropoff Location"
                  {...formik.getFieldProps("dropOfLocation")}
                  isInvalid={
                    formik.touched.dropOfLocation &&
                    formik.errors.dropOfLocation
                  }
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.dropOfLocation}
                </Form.Control.Feedback>
              </FloatingLabel>

              <InputGroup className="mb-3">
                <FloatingLabel label="Pickup Date" className="flex-grow-1">
                  <Form.Control
                    type="date"
                    min={moment().format("YYYY-MM-DD")}
                    placeholder="Pickup Date"
                    {...formik.getFieldProps("pickUpDate")}
                    isInvalid={
                      formik.touched.pickUpDate && formik.errors.pickUpDate
                    }
                    onBlur={checkTheCarIsAvailable}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.pickUpDate}
                  </Form.Control.Feedback>
                </FloatingLabel>

                <FloatingLabel label="Time">
                  <Form.Control
                    type="time"
                    placeholder="Pickup Time"
                    {...formik.getFieldProps("pickUpTime")}
                    isInvalid={
                      formik.touched.pickUpTime && formik.errors.pickUpTime
                    }
                    onBlur={checkTheCarIsAvailable}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.pickUpTime}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </InputGroup>

              <InputGroup className="mb-3">
                <FloatingLabel label="Dropoff Date" className="flex-grow-1">
                  <Form.Control
                    type="date"
                    placeholder="Dropoff Date"
                    min={moment(formik.values.pickUpDate).format("YYYY-MM-DD")}
                    {...formik.getFieldProps("dropOffDate")}
                    isInvalid={
                      formik.touched.dropOffDate && formik.errors.dropOffDate
                    }
                    onBlur={checkTheCarIsAvailable}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.dropOffDate}
                  </Form.Control.Feedback>
                </FloatingLabel>

                <FloatingLabel label="Time">
                  <Form.Control
                    type="time"
                    placeholder="Dropoff Time"
                    {...formik.getFieldProps("dropOffTime")}
                    isInvalid={
                      formik.touched.dropOffTime && formik.errors.dropOffTime
                    }
                    onBlur={checkTheCarIsAvailable}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.dropOffTime}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </InputGroup>
            </Col>
            <Col md={6} className={isCarAvailable ? "d-block" : "d-none"}>
              <Alert variant="success">
                Total Price: <b>${totalPrice}</b>
              </Alert>
              <FloatingLabel label="Card Number" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Card Number"
                  as={MaskedInput}
                  mask="1111-1111-1111-1111"
                  {...formik.getFieldProps("cardNo")}
                  isInvalid={formik.touched.cardNo && formik.errors.cardNo}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.cardNo}
                </Form.Control.Feedback>
              </FloatingLabel>

              <FloatingLabel label="Name on Card" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Name on Card"
                  {...formik.getFieldProps("nameOnCard")}
                  isInvalid={
                    formik.touched.nameOnCard && formik.errors.nameOnCard
                  }
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.nameOnCard}
                </Form.Control.Feedback>
              </FloatingLabel>

              <InputGroup className="mb-3">
                <FloatingLabel label="Expire Date" className="flex-grow-1">
                  <Form.Control
                    type="text"
                    placeholder="Expire Date"
                    as={MaskedInput}
                    mask="11/11"
                    {...formik.getFieldProps("expireDate")}
                    isInvalid={
                      formik.touched.expireDate && formik.errors.expireDate
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.expireDate}
                  </Form.Control.Feedback>
                </FloatingLabel>

                <FloatingLabel label="CVC" className="flex-grow-1">
                  <Form.Control
                    type="text"
                    placeholder="CVC"
                    as={MaskedInput}
                    mask="111"
                    {...formik.getFieldProps("cvc")}
                    isInvalid={formik.touched.cvc && formik.errors.cvc}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.cvc}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </InputGroup>

              <Form.Check
                type="checkbox"
                label="I have read and aggree the sales contract"
                id="contract"
                {...formik.getFieldProps("contract")}
                isInvalid={formik.touched.contract && formik.errors.contract}
              />
            </Col>
            <Col className="text-center">
              <Button
                variant="primary"
                size="lg"
                type="submit"
                className={isCarAvailable ? "d-block" : "d-none"}
                disabled={loading}
              >
                {loading && <Spinner animation="border" size="sm" />} Book Now
              </Button>

              <Button
                variant="secondary"
                size="lg"
                type="button"
                onClick={checkTheCarIsAvailable}
                className={isCarAvailable ? "d-none" : "d-block"}
                disabled={loading}
              >
                {loading && <Spinner animation="border" size="sm" />} Check
                Avaliabilty
              </Button>
            </Col>
          </Row>
        </Container>
      </Form>
    </>
  );
};

export default VehicleBookingForm;
