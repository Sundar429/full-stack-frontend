import axios from 'axios'


export const API_URL="https://full-stack-backend-production-3243.up.railway.app"

export const api=axios.create({
    baseURL:API_URL,
    headers:{
        "Content-Type":"application/json",
        
    }
})