import React from 'react'
import PageHeader from '../../components/users/common/page-header/page-header'
import Spacer from '../../components/users/common/spacer/spacer'
import Reservations from '../../components/users/reservations/reservations'


const UserReservationsPage = () => {
  return (
    <>
        <PageHeader title="Reservations"/>
        <Spacer/>
        <Reservations/>
        <Spacer/>
    </>
  )
}

export default UserReservationsPage