import axios from 'axios'
import { LOCAL_URL } from '../constants/endpoints'

const BE_URL = process.env.BE_URL || LOCAL_URL


export const axiosAuth = () => {
    const token = localStorage.getItem('token');
    return axios.create({
        baseURL: `${LOCAL_URL}`,
        headers: {
            Authorization: token
        }
 })
}

export default axiosAuth