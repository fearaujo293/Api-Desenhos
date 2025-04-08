import React from "react";
import axios from "axios";


const api = axios.create({
    baseURL: `http://fakestoreapi.com/products`
})

export default api;