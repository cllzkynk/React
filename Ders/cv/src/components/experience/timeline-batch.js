import React from "react";

const TimelineBatch = (props) => {
  return (
    <div className="timeline-badge">
      <span className="timeline-balloon-date-day">{props.month}</span>
      <span className="timeline-balloon-date-month">{props.year}</span>
    </div>
  );
};

export default TimelineBatch;
