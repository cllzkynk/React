import React from "react";
import SectionTitle from "../section-title/section-title";
import AboutItem from "./about-item";

const About = () => {
  return (
    <section id="aboutUs" className="secPad">
      <div className="container">
        <SectionTitle
          title="I am Sam, a UI Designer &amp; developer"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        />

        <div className="row">
          <AboutItem
            title="Responsive Design"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse interdum erat et neque tincidunt volutpat. Cras eget
              augue id dui varius pretium."
            icon="desktop"
          />

          <AboutItem
            title="HTML5/CSS3 Dev"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse interdum erat et neque tincidunt volutpat. Cras eget
              augue id dui varius pretium."
            icon="css3"
          />

          <AboutItem
            title="JavaScript jQuery"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse interdum erat et neque tincidunt volutpat. Cras eget
              augue id dui varius pretium."
            icon="lightbulb-o"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
