

import React from "react";
import { Card, Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionHeader from "../../common/section-header/section-header";
import team from "./team.json";
import "swiper/css";
import TeamMember from "./team-member";
const Team = () => {
  return (
    <section className="team">
      <SectionHeader
        title="Our Team"
        desc="Inbecilloque elegans errorem concedo etsi electram."
      />
      <Container>
        <Swiper spaceBetween={50} slidesPerView={3} loop={Infinity}>
          {team.map((item, index) => (
            <SwiperSlide key={index}>
              <TeamMember {...item}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};
export default Team;