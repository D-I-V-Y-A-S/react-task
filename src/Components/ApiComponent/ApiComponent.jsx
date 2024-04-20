import axios from 'axios'
import React, { useState } from 'react'
import './ApiComponent.css'

const ApiComponent = () => {
    const [userData,setUserData]=useState(null)
    const getDataFromApi =async()=>{
        const response=await axios.get("https://fakestoreapi.com/users")
        const data=response.data
        console.log(data)
        setUserData(data)
    }
  return (
    <React.Fragment>
        <div className="box">
        <p>Characters Data</p>
        <button onClick={getDataFromApi}>Get Data</button>
        </div>
        <ul className="box-align">
            {userData && userData.map((iterator)=>(
            <li key={iterator.id} className="box-arrange">
             <p>
                                {iterator.name.firstname} {iterator.name.lastname}<br/>
                                {iterator.username}<br />
                                {iterator.email}<br />
                                {iterator.phone}
                            </p>
            </li>
            ))}
        </ul>
        </React.Fragment>
  )
}

export default ApiComponent