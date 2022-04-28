import React, {useEffect, useState} from 'react'
import { Button } from 'react-bootstrap';
const UseEffect = () => {
    const [message, setMessage] = useState("");

    const [test, setTest] = useState("");


    console.log("1-Bu satır her state güncellemesinde çalışır.")
    useEffect( ()=> {
        console.log("2-Bu satır sadece componnet ilk yüklendiğinde çalışır.")


return()=>{

    console.log("2-Bu satır sadece componnet unmount oldugunda çalışır.")
}

    },[]);


    useEffect( ()=> {
        console.log("3-Bu satır message isimli state guncellendiğinde çalışır.")
    },[message]);





    return (
        <div>
            {message}
            <Button variant="success" onClick={()=>setMessage("Hello")}>Merhaba</Button>
            <Button variant="danger" onClick={()=>setTest("Hello")}>Test</Button>
        </div>
      )
    }
export default UseEffect
 










