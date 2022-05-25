import React, { useEffect, useState } from "react";
import { Alert, Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import PageHeader from "../../components/users/common/page-header/page-header";
import Spacer from "../../components/users/common/spacer/spacer";
import VehicleBookingForm from "../../components/users/vehicles/vehicle-booking-form";
import VehicleDetails from "../../components/users/vehicles/vehicle-details";
import { useStore } from "../../store";

const VehicleDetailsPage = () => {
  const { vehicleId } = useParams();
  const { vehicleState, userState } = useStore();
  const { vehicles } = vehicleState;
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const { isUserLogin } = userState;
  const navigate = useNavigate();

  useEffect(() => {
    const selectedVehicles = vehicles.filter((item) => item.id == vehicleId);
    if (selectedVehicles.length <= 0) navigate("/vehicle-not-found");
    setSelectedVehicle(selectedVehicles[0]);
  }, []);

  if (selectedVehicle)
    return (
      <>
        <PageHeader title={selectedVehicle.model} />
        <Spacer />
        <VehicleDetails vehicle={selectedVehicle} />
        <Spacer />
        {isUserLogin ? (
          <>
            <VehicleBookingForm vehicle={selectedVehicle} />
          </>
        ) : (
          <Container>
            <Alert variant="warning">
              <h4 className="text-center">
                Please log in to system to check the availability of the car and
                make reservation.
              </h4>
            </Alert>
          </Container>
        )}
        <Spacer />
      </>
    );
};

export default VehicleDetailsPage;
