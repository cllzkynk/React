import React from "react";

const Skill = (props) => {
  return (
    <div className="row">
      <div className="col-md-2 skilltitle">{props.title}</div>
      <div className="col-md-8">
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow={props.value}
            aria-valuemin="0"
            aria-valuemax="100"
            style={{width: props.value + "%"}}
          >
            <span className="sr-only">{props.value}% Complete</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
