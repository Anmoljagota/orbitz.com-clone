import axios from "axios";
import React from 'react'

const Restaurent = () => {
 return axios.get("http://localhost:4000/data")
}

export default Restaurent
