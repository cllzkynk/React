import React from "react";
import PageHeader from "../../components/users/common/page-header/page-header";
import Spacer from "../../components/users/common/spacer/spacer";
import Vehicles from "../../components/users/vehicles/vehicles";

const VehiclesPage = () => {
  return (
    <>
      <PageHeader title="Vehicles" />
      <Spacer />
      <Vehicles />
      <Spacer />
    </>
  );
};

export default VehiclesPage;
