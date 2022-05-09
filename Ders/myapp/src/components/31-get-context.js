import React ,{useContext} from 'react'
import {StoreContext} from "../store"

const GetContext = () => {
const context =useContext(StoreContext);



  return (
    <>
<div   style={{color :context.color}}>

    Bu renk merkezi state uzerinden geliyor


</div>


</>
  )
}

export default GetContext