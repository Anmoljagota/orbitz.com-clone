import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../Pages/Home'
import Travel from '../Pages/Travel'
import Espanol from '../Pages/Espanol'
import Property from '../Pages/Property'
import Support from '../Support'
import Trips from '../Pages/Trips'
import Login from '../Pages/Login'
import Particulardata from '../Pages/Particulardata';
import Signup from '../components/Signup'
import PaymentPage from '../PaymentPage/PaymentPage'
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/travel" element={<Travel/>}></Route>
        <Route path="/espanol" element={<Espanol/>}></Route>
        <Route path="/property" element={<Property/>}></Route>
        <Route path="/support" element={<Support/>}></Route>
        <Route path="/trip" element={<Trips/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/particular" element={<Particulardata/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/payment" element={<PaymentPage/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes
