import axios from "axios";
import { LOCAL_URL, DEPLOYED_URL } from "../constants/endpoints";


export const axiosAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: `${DEPLOYED_URL}`,
    headers: {
      Authorization: token,
    },
  });
};

export default axiosAuth;
