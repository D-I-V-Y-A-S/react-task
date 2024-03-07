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
        <div class="layout">
        <div class="box">
        <p>Characters Data</p><br/>
        <button onClick={getDataFromApi}>Get Data</button>
        </div>
        <ul class="box-align">
            {userData && userData.map((iterator)=>(
            <li key={iterator.id} id="box-align">
             <p>
                                {iterator.name.firstname} {iterator.name.lastname}<br/>
                                {iterator.username}<br />
                                {iterator.email}<br />
                                {iterator.phone}
                            </p>
            </li>
            ))}
        </ul>
        </div>
        </React.Fragment>
  )
}

export default ApiComponent