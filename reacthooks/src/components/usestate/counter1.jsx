import React, { useContext } from 'react'
import { AppContext } from './usecontext/parentcontext'
// import ParentContext from './usecontext/parentcontext'
import  { useState } from 'react'

const Counter1 = () => {
  const[currAge,setAge]=useState(20)

  const{isdark}=useContext(AppContext)

  const inc=()=>{
    setAge(currAge+1);
  }
  
  const dec=()=>{
    setAge(currAge-1)
  }

  const inc10=()=>{
    setAge(currAge+10)
  }

  return (
    <div style={{
      border:"1px dashed white",
      padding:"10px",
      margin:"20px",
      backgroundColor:`${isdark?"black":"white"}`,
      color:`${isdark?"white":"black"}`
    }}>
        <h1>counter 1</h1>
      <h3>My Current Age is {currAge}</h3>
      <button onClick={inc}>Get Older</button>
      <button onClick={dec}>Get younger</button>
      <button onClick={inc10}>Get older by 10</button>
    </div>
  );
}

export default Counter1

