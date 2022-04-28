import React, { useState } from 'react'
import { ButtonGroup ,Button} from 'react-bootstrap'
const Counter = () => {
  const [count, setCount] = useState(0);
 const handleCount= (cnt) => {
    if(cnt<0 || cnt>100) return;
    setCount(cnt);
  }
  
  return (
    <ButtonGroup aria-label="Basic example" >
  <Button variant="success" onClick={()=>handleCount(count+1)}>+</Button>
  <Button variant="light">{count}</Button>
  <Button variant="warning" onClick={()=>handleCount(count-1)}>-</Button>
  <Button variant="info" onClick={()=>handleCount(0)}>Reset</Button>
</ButtonGroup>
  )
}
export default Counter