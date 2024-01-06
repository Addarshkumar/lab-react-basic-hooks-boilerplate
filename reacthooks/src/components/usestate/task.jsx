import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from './usecontext/parentcontext'



const Task = () => {
    const[count,setCount]=useState(0)
    const[show,setShow]=useState(false)
    const{isdark,setdark}=useContext(AppContext)

    const handleShow=()=>{
      alert("content button clicked")
      setShow(!show);
    }

  return (
    <div>
        <div>
        <button onClick={()=>{setdark(!isdark)}}>Toggle</button>
    </div>
    <div
    style={{
        width:"600px",
        border:"1px dashed white",
        padding:"10px",
        margin:"20px",
        backgroundColor:`${isdark?"black":"white"}`,
        color:`${isdark?"white":"black"}`
      }}>
        <button onClick={handleShow} >content</button>
        <p style={{display:show?"block":"none"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa consectetur omnis repudiandae accusamus doloremque commodi reprehenderit adipisci modi nostrum ex nobis voluptatum laudantium quas, velit perferendis at aperiam ad exercitationem?</p>
        <p>{count}</p>
        <button onClick={()=>{setCount(count+1)}}>like</button>
    </div>
    </div>
  )
}

export default Task