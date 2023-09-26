import axios from "axios";
import React, { useEffect, useState } from "react";
export function Home(){
    const[data,setdata]=useState( )
    useEffect(()=>{
        axios.get('http://localhost:3000/api/test')
        .then((r)=>alert(r.data))
        
    })
    function send(){
        axios.get('http://localhost:3000/api/django').then((r)=>alert(r.data))
    }
    return(
        <div>
            <h1>Hello from react</h1>
            <button onClick={send}>Req Django</button>

        </div>
        )
}