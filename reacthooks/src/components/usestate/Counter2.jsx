import React, { useContext, useEffect } from 'react'
import  { useState } from 'react'
import {AppContext} from './usecontext/parentcontext';
import App from '../../App';
const Counter2 = () => {
    const [currAge,setAge]=useState(20)
    const[currSib,setSib]=useState(1)
    const{isdark}=useContext(AppContext)


    const incSib=()=>{
        setSib(currSib+1)
    }

    const decsib=()=>{
        setSib(currSib-1)
    }

    const inc=()=>{
        setAge(currAge+1);
      }

    //   useEffect(()=>{
    //     console.log("mounts")
    //  },[])
      
    return (
        <div
        style={{
          border:"1px dashed white",
          padding:"10px",
          margin:"20px",
          backgroundColor:`${isdark?"black":"white"}`,
          color:`${isdark?"white":"black"}`
        }}>
            <h1>Counter 2</h1>
          <h3>My Current Age is {currAge}</h3>
          <h4>Current sibling {currSib}</h4>
          <button onClick={incSib}>getsib</button>
          <button onClick={inc}>Get Older</button>
          <button onClick={decsib}>Get less sib</button>
        </div>
      );
}

export default Counter2