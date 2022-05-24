import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PageHeader from '../../components/users/common/page-header/page-header'
import Spacer from '../../components/users/common/spacer/spacer'
import VehicleBookingForm from '../../components/users/vehicles/vehicle-booking-form'
import VehicleDetails from '../../components/users/vehicles/vehicle-details'
import { useStore } from '../../store'

const VehicleDetailsPage = () => {
  const { vehicleId } = useParams();
  const { vehicleState } = useStore();
  const { vehicles } = vehicleState;
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  useEffect(() => {
    const selectedVehicles = vehicles.filter( item => item.id == vehicleId);
    if(selectedVehicles.length<=0) return;
    setSelectedVehicle(selectedVehicles[0]);
  }, [])
  
  
  if(selectedVehicle)
  return (
    <>
    <PageHeader title={selectedVehicle.model}/>
    <Spacer/>
    <VehicleDetails vehicle={selectedVehicle}/>
    <Spacer/>
    <VehicleBookingForm/>
    <Spacer/>
    </>
  )
}

export default VehicleDetailsPage