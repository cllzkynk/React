import React from 'react'
import Team from '../../components/users/about/team/team'
import PageHeader from '../../components/users/common/page-header/page-header'
import Spacer from '../../components/users/common/spacer/scaper'
import Testimonals from '../../components/users/common/testimonals/testimonals'
import WhyUs from '../../components/users/common/whyus/whyus'

const AboutPage = () => {
  return (
    <>
      <PageHeader title="About Us"/>
      <Spacer/>
      <WhyUs/>
      <Spacer/>
      <Testimonals/>
      <Spacer/>
      <Team/>


    </>
  )
}

export default AboutPage