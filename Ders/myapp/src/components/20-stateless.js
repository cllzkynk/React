import React from 'react'

const Stateless = () => {
let counter = 10;
const arttir = () => { 
counter++;
console.log(counter);

document.querySelector("b").innerText=counter;

 }



  return (
    <div>
        <b>{counter}</b>
        <button onClick={arttir}>Arttir</button>

    </div>
  )
}

export default Stateless