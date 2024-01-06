import React, { useContext, useState } from 'react'
import { AppContext } from './usecontext/parentcontext';

const Counter3 = () => {

  const[data,setdata]=useState({age:20,siblings:3});
  const{isdark}=useContext(AppContext)

  const incAge=()=>{
    setdata({
        ...data,age:data.age+1
    })
  }

  const incSib=()=>{
     setdata({
        ...data,siblings:data.siblings+1
     })
  }
  return (
    <div
    style={{
      border:"1px dashed white",
      padding:"10px",
      margin:"20px",
      backgroundColor:`${isdark?"black":"white"}`,
      color:`${isdark?"white":"black"}`
    }}>
    <h1>counter3</h1>
    <h2>my age is {data.age}</h2>
    <h3> my siblings are {data.siblings}</h3>
    <button onClick={incAge}>get older</button>
    <button onClick={incSib}>get sib</button>
    </div>
  )
}

export default Counter3