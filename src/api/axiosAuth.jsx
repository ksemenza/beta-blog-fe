import axios from 'axios'
import { LOCAL_URL, DEPLOYED_URL } from '../constants/endpoints'

const DB_URL = process.env.BE_URL || LOCAL_URL


export const axiosAuth = () => {
    const token = localStorage.getItem('token');
    return axios.create({
        baseURL: `http://localhost:8080/api`,
        headers: {
            Authorization: token
        }
 })
}

export default axiosAuth