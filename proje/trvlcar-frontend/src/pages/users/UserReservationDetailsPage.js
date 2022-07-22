import React from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../../components/users/common/page-header/page-header";
import Spacer from "../../components/users/common/spacer/spacer";
import ReservationDetails from "../../components/users/reservations/reservation-details";

const UserReservationDetailsPage = () => {
  const { reservationId } = useParams();

  return (
    <>
      <PageHeader title="Reservation Details" />
      <Spacer />
      <ReservationDetails reservationId={reservationId} />
      <Spacer />
    </>
  );
};

export default UserReservationDetailsPage;
