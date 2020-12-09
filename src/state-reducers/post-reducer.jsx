import axios from 'axios'
import {LOCAL_URL, USER_URL, POST_URL, DETAILS_URL} from '../constants/endpoints'

export const POST_REQ = "POST_REQ";
export const POST_SUC = "POST_SUC";
export const POST_FAIL = "POST_FAIL";

//Get /api/post
export const getPosts = (posts, history) => dispatch => {
    dispatch({type:POST_REQ});
    axios.get(`${LOCAL_URL}${POST_URL}`, posts)
    .then(res => {
        dispatch({type: POST_SUC, payload:res.data})
        history.push('/post');
    })
    .catch(err => {
        dispatch({type:POST_FAIL, payload:err.res});
    });
}
