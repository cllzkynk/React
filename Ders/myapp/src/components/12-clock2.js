import React from 'react'
import "../assets/css/10-clock1.css";
import moment from "moment";

const Clock2 = (props) => {
  const dateTime = moment();
  const dateStr = dateTime.format("LL");
  const timeStr = dateTime.format("HH:mm");
  const dayStr = dateTime.format("dddd");
  const hour = dateTime.format("HH");
  let message = "";

  if(hour>=6 && hour<11){
    message = "Morning";
  }
  else if(hour>=11 && hour<17){
    message = "Afternoon";
  }
  else if(hour>=17 && hour<21){
    message = "Evening";
  }
  else{
    message = "Night";
  }


  const stil = {
    backgroundColor: props.bgColor,
    color:props.color
  }
 

  return (
    <div className="clock-container" style={stil}>
      <div className="time">{timeStr}</div>
      <div>
          <div className="date">{dateStr}</div>
          <div className="day">{dayStr} {message}</div>
      </div>
    </div>
  )
}

export default Clock2