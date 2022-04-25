import React from 'react'

const StyleInternal = () => {

    const stil = {
        color:"red", 
        textAlign:"center", 
        backgroundColor: "yellow"
    };


  return (
    <>
        <div className="maviBg" style={stil}>StyleInternal</div>
        <div style={{...stil, color:"blue", fontWeight:"bold"}}>Hello</div>
        <div style={stil}>StyleInternal</div>
        
    </>
  )
}

export default StyleInternal