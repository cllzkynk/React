import React from 'react'
import PageHeader from '../../components/users/common/page-header/page-header'
import Spacer from '../../components/users/common/spacer/spacer'
import Profile from '../../components/users/profile/profile'

const ProfilePage = () => {
  return (
    <>
        <PageHeader title="Profile"/>
        <Spacer/>
        <Profile/>
        <Spacer/>
    </>
  )
}

export default ProfilePage