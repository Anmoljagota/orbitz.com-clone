import axios from "axios";
import React from 'react'

const Restaurent = () => {
 return axios.get("https://json-mock-orbitz.onrender.com/data")
}

export default Restaurent
