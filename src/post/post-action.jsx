import axios from "axios";
import axiosAuth from "../api/axiosAuth";
import {
  LOCAL_URL,
  USER_URL,
  POST_URL,
  DETAILS_URL,
} from "../constants/endpoints";

export const POST_REQ = "POST_REQ";
export const POST_SUC = "POST_SUC";
export const POST_FAIL = "POST_FAIL";

// const USER_ID = localStorage.getItem('user_id');
const POST_ID = localStorage.getItem("post_id");

const URL_BE = process.env.BE_URL || LOCAL_URL;

//GET Admin Post All
export const getPostsAll = (posts, history) => (dispatch) => {
  dispatch({ type: POST_REQ });
  axiosAuth()
    .get(`${URL_BE}${POST_URL}`, posts)
    .then((res) => {
      dispatch({ type: POST_SUC, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: POST_FAIL, payload: err.res });
    });
};
//GET User's Post
export const getPostDetails = (posts) => (dispatch) => {
  dispatch({ type: POST_REQ });
  axiosAuth()
    .get(`${USER_URL}${USER_ID}${DETAILS_URL}`, posts)
    .then((res) => {

      

      dispatch({ type: POST_SUC, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: POST_FAIL, payload: err.res });
    });
};

//ADD User's Post

export const addPost = (post) => (dispatch) => {
  dispatch({ type: POST_REQ });
  axiosAuth()
    .post(`${POST_URL}`, post)
    .then((res) => {
      // console.log(`add post 43 ${res.data.posts} `)
      dispatch({ type: POST_SUC, payload: res.data.posts });
      window.location.reload();
    })
    .catch((err) => {
      dispatch({ type: POST_FAIL, payload: err });
    });
};

//EDIT Posts
export const editPost = (post) => (dispatch) => {
  dispatch({ type: POST_REQ });

  console.log(post);

  axiosAuth()
    .put(`${POST_URL}/${post.id}`, post)
    .then((res) => {
      console.log(`edit post 57 ${post}`);
      dispatch({ type: POST_SUC, payload: post });
      window.location.reload();
    })
    .catch((err) => {
      dispatch({ type: POST_FAIL, payload: err });
    });
};
//DELETE Posts
export const deletePost = (post) => (dispatch) => {
  dispatch({ type: POST_REQ });
  axiosAuth()
    .delete(`${POST_URL}/${post.id}`)
    .then((res) => {
      console.log(`delete post 70 ${post}`);
      dispatch({ type: POST_SUC, payload: res.data.post });
    })
    .catch((err) => {
      dispatch({ type: POST_FAIL, payload: err });
    });
};
