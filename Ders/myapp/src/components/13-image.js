import React from 'react'
import manzara1 from "../assets/img/image1.jpg";
import manzara2 from "../assets/img/image2.jpg";

const Image = () => {
  return (
    <div>
        <img src={manzara1} alt=""/>
        <img src={manzara2} alt=""/>
        <img src={require("../assets/img/image3.jpg")} alt=""/>
    </div>
  )
}

export default Image