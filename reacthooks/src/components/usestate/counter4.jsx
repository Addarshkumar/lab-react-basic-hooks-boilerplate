import React, { useContext, useState } from 'react'
import { AppContext } from './usecontext/parentcontext'


const Counter4 = () => {
    const[currAge,setAge]=useState(20)
    const[currSib,setSib]=useState(0)
    const{isdark}=useContext(AppContext)
  return (
    <div
    style={{
      border:"1px dashed white",
      padding:"10px",
      margin:"20px",
      backgroundColor:`${isdark?"black":"white"}`,
      color:`${isdark?"white":"black"}`
    }}>
        <h1>counter 4</h1>
        <h2>my currect age is {currAge}</h2>
        <h3>current siblings are {currSib}</h3>
        <button onClick={()=>{setAge(currAge=>currAge+1)}}>get older</button>
        <button onClick={()=>{setSib(currSib=>currSib+1)}}>get sib</button>
    
    </div>
  )
}

export default Counter4