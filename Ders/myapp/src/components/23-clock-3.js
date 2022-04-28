import React, {useEffect, useState} from 'react'
import "../assets/css/10-clock1.css";
import moment from "moment";




const Clock3 = (props) => {
  const [dateTime, setDateTime] = useState(moment());
  useEffect(()=>{
    const timer = setInterval(()=>{
      setDateTime(moment());
      console.log(".");
    },1000);
    return ()=>{
      clearInterval(timer);
    }
  },[])
  
  const dateStr = dateTime.format("LL");
  const timeStr = dateTime.format("HH:mm");
  const dayStr = dateTime.format("dddd");
  const hour = dateTime.format("HH");
  const minute = dateTime.format("mm");
  const second = dateTime.format("ss");
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
    <>
    <div className="clock-container" style={stil}>
      <div className="time">
        {hour}
        {second % 2 == 0 ? ":" : " "}
        {minute}</div>
      <div>
          <div className="date">{dateStr}</div>
          <div className="day">{dayStr} {message}</div>
      </div>
    </div>
    </>
  )
}
export default Clock3