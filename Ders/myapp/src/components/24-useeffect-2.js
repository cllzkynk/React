import React, { useState,useEffect } from 'react'
import {Button} from 'react-bootstrap'

const UseEffect2 = () => {
  const [counter, setCounter] = useState(0);
  const [status, setStatus] = useState("pending");




  const arttir = () => {
    setCounter(counter + 1);
  };


 const azalt=() => {
  setCounter(counter-1);
};




useEffect( ()=>{
  document.title = counter+"---------------"+Math.round(Math.random());
 
}, [counter]);







  return (
    <div>
        <div>Counter: {counter}</div>  
   <Button  className="m-3" variant="warning" onClick={arttir}> Arttir </Button>
   <Button  className="m-3" variant="warning" onClick={azalt}> Azalt </Button>
   <Button  className="m-3" variant="warning" onClick={()=>setStatus("done")}> status</Button>


    </div>
  )
}

export default UseEffect2;