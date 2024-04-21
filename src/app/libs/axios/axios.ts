import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://food-station-api.vercel.app/api',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default apiClient
