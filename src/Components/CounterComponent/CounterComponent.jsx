import React, { useState } from 'react'
import './CounterComponent.css'
const CounterComponent = () => {
    const [value,setValue]=useState(0)

    const addCounter=()=>{
         setValue(value+1)
    }
    const decCounter=()=>{
        setValue(value-1)
   }

  return (
    <React.Fragment>
        <p style={{margin:"0px"}}>COUNTER COMPONENT</p>
      <section className="counter">
    <button onClick={addCounter} className="btn">+1</button>
    <p className="val">{value}</p>
    <button onClick={decCounter} className="btn">-1</button>
    </section>
    </React.Fragment>

  )
}

export default CounterComponent