import React from "react";
import { Container } from "react-bootstrap";
import data from "./whyus.json";
import "./whyus.css";
import SectionHeader from "../section-header/section-header";

const WhyUs = () => {
  return (
    <section className="whyus">
      <SectionHeader title="Why People Like Us" desc="Inbecilloque elegans errorem concedo etsi electram."/>
      <Container>
        <ul className="row g-5">
          {data.map((item, index) => (
            <li key={index} className="col-lg-3 col-md-4 col-sm-6 col-12">
                <span>{item.title}</span><br/>
                {item.desc}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default WhyUs;
