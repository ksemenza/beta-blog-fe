import axios from 'axios'

export const userAuth = () => {
    const token = localStorage.getItem('token');
    const user_id = localStorage.getItem('userID')
    return axios.create({
        baseURL: `http://localhost:8080/api/auth/${user_id}`,
        headers: {
            Authorization: token
        }
 })
}