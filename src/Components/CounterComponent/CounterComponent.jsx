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
        <p>COUNTER COMPONENT</p>
      <section class="counter">
    <button onClick={addCounter} class="btn">+1</button>
    <p id="val">{value}</p>
    <button onClick={decCounter} class="btn">-1</button>
    </section>
    </React.Fragment>

  )
}

export default CounterComponent