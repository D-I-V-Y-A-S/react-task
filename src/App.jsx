import React from 'react'
import { BrowserRouter as Router,Link, Route, Routes } from 'react-router-dom'
import GreetComponent from './Components/GreetComponent/GreetComponent'
import CounterComponent from './Components/CounterComponent/CounterComponent'
import ApiComponent from './Components/ApiComponent/ApiComponent'
import './App.css'
const App = () => {
  return (

    <Router>
    <nav>
     <ul class="align">
       <li>
         <Link to='/' class="link">Home</Link>
         </li>
       <li>
         <Link to='/about' class="link">Counter</Link>
         </li>
       <li>
         <Link to='/contact' class="link">Characters</Link>
         </li>
     </ul>
    </nav>
 <Routes>
   <Route exact path='/' element= {<GreetComponent/>}></Route>
   <Route exact path='/about' element= {<CounterComponent/>}></Route>
   <Route exact path='/contact' element= {<ApiComponent/>}></Route>
 </Routes>
 </Router>
  )
}

export default App