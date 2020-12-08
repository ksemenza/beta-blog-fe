import axios from 'axios'

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