import axios from 'axios';

const API = axios.create({
    baseURL:"https://oasis-6gfa.onrender.com",
    withCredentials:true,
    headers:{
        'Content-Type':'application/json'
    }
})

export default API;