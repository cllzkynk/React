import React from "react";
import SectionTitle from "../section-title/section-title";
import Skill from "./skill";

const Skills = () => {
  return (
    <section id="skills" className="secPad white">
      <div className="container">
        <SectionTitle
          title="My Skills"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing"
        />

        <div className="row">
          <div className="col-sm-6">
            <h2>
              Programming <strong>Skills</strong>
            </h2>
            <p className="mrgBtm20">
              It takes knowledge, smart work, and dedication to make great ideas
              come to life. I have been helping make great ideas happen for the
              past 7 years and am always ready for new challenges.
            </p>
            <Skill title="HTML5" value="90" />
            <Skill title="CSS/CC3" value="90" />
            <Skill title="JavaScript" value="80" />
            <Skill title="jQuery/Ajax" value="90" />
          </div>
          <div className="col-sm-6">
            <h2>
              Designing <strong>Skills</strong>
            </h2>
            <p className="mrgBtm20">
              Problem solving is not always about sitting in a board room
              talking about the way things should be done. I have a strong
              background in UI design which allows me to think on my feet and
              act upon it.
            </p>
            <Skill title="Photoshop" value="90" />
            <Skill title="Illustrator" value="80" />
            <Skill title="Indesign" value="75" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
