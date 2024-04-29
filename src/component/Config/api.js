import axios from 'axios'


// export const API_URL="http://localhost:5454"
export const API_URL="https://full-stack-backend-production.up.railway.app/"

export const api=axios.create({
    baseURL:API_URL,
    headers:{
        "Content-Type":"application/json",
        
    }
})