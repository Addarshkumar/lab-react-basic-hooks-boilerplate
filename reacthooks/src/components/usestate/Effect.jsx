import React,{Component, useContext, useState} from 'react'
import { useEffect } from 'react'
import { AppContext } from './usecontext/parentcontext'

const Effect = () => {
    
    const[age,setAge]=useState(19)
    const[ageSib,setAgeSib]=useState(30)
    // const{isdark}=useContext(AppContext)

    useEffect(()=>{
      alert(`something is changed ${age}`)
    },[age])
  return (
    <div
    style={{
      border:"1px dashed white",
      padding:"10px",
      margin:"20px",
    
    }}>
    <h1>Effect</h1>
    <h3>count:{ageSib}</h3>
    <h3>age:{age}</h3>
    <button onClick={()=>{setAgeSib(ageSib+1)}}>+</button>
    <button onClick={()=>{setAge(age-1)}}>-</button>
    </div>
  )
}

export default Effect




