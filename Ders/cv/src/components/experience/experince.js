import React from "react";

const Experince = (props) => {
    console.log(props);
  return (
    <div className={`${props.position=="right" && props.alone && "col-sm-offset-6" } col-sm-6 timeline-item`}>
      <div className="row">
        <div className={`${props.position == "right" && "col-sm-offset-1"} col-sm-11`}>
          <div className={`timeline-panel ${props.position == "right" ? "debits" : "credits"} `}>
            <ul className="timeline-panel-ul">
              <li>
                <span className="importo">{props.title}</span>
              </li>
              <li>
                <span className="causale">
                  {props.desc}
                </span>
              </li>
              <li>
                <p>
                  <small className="text-muted">{props.sDate} - {props.eDate}</small>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experince;
