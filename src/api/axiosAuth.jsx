import axios from 'axios'
import { LOCAL_URL } from '../constants/endpoints'

const URL_BE = process.env.BE_URL || LOCAL_URL


export const axiosAuth = () => {
    const token = localStorage.getItem('token');
    return axios.create({
        baseURL: `${URL_BE}`,
        headers: {
            Authorization: token
        }
 })
}

export default axiosAuth