import axios from 'axios'
import { LOCAL_URL } from '../constants/endpoints'

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