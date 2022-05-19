import React from 'react'
import Footer from '../components/users/common/footer/footer'
import MainNavbar from '../components/users/common/header/main-navbar'
import TopBar from '../components/users/common/header/top-bar'

const UserTemplate = ({children}) => {
  return (
    <>
        <TopBar/>
        <MainNavbar/>
        {children}
        <Footer/>
    </>
  )
}
/*  */
export default UserTemplate