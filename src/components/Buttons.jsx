import React, { useEffect } from 'react'
import { useState } from 'react'

function Buttons() {
    const [color,setColor] = useState('')
    const btnStyle = {padding:'10px', backgroundColor:'black', color:'white', borderRadius:'10px', margin:'30px'}
    const click = color=>{
      setColor(color)
    }
    useEffect(()=>{
        document.body.style.backgroundColor = color
    },[color])
  return (
    <div style={{marginLeft:'30%'}}>
        <button onClick={()=>{click('red')}} style={btnStyle}>RED</button>
        <button onClick={()=>{click('blue')}} style={btnStyle}>BLUE</button>
        <button onClick={()=>{click('green')}} style={btnStyle}>GREEN</button>
        <button onClick={()=>{click('yellow')}} style={btnStyle}>YELLOW</button>
     </div>
  )
}

export default Buttons