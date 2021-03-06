import axios from "axios";
import axiosAuth from "../api/axiosAuth";
import {
  LOCAL_URL,
  DEPLOYED_URL,
  USER_URL,
  COMMENT_URL,
  DETAILS_URL,
} from "../constants/endpoints";
import { USER_ID, COMMENT_ID } from "../constants/local_storage";

export const COMMENT_REQ = "COMMENT_REQ";
export const COMMENT_SUC = "COMMENT_SUC";
export const COMMENT_FAIL = "COMMENT_FAIL";


//GET Admin Comment All
export const getCommentsAll = (comments, history) => (dispatch) => {
  dispatch({ type: COMMENT_REQ });
  axiosAuth()
    .get(`${DEPLOYED_URL}${COMMENT_URL}`, comments)
    .then((res) => {
      dispatch({ type: COMMENT_SUC, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: COMMENT_FAIL, payload: err.res });
    });
};
//GET User's Comment
export const getCommentDetails = (comments) => (dispatch) => {
  dispatch({ type: COMMENT_REQ });
  axiosAuth()
    .get(`${COMMENT_URL}${USER_ID}${DETAILS_URL}`, comments)
    .then((res) => {
      dispatch({ type: COMMENT_SUC, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: COMMENT_FAIL, payload: err.res });
    });
};

//ADD User's Comment

export const addComment = (comment) => (dispatch) => {
  dispatch({ type: COMMENT_REQ });
  axiosAuth()
    .post(`${COMMENT_URL}`, comment)
    .then((res) => {
      // console.log(comment)
      console.log(`add comment 43 ${res.data} `);
      dispatch({ type: COMMENT_SUC, payload: res.data.comments });
      window.location.reload();
    })
    .catch((err) => {
      dispatch({ type: COMMENT_FAIL, payload: err });
    });
};

//EDIT Comments
export const editComment = (comment) => (dispatch) => {
  dispatch({ type: COMMENT_REQ });
  axiosAuth()
    .put(`${COMMENT_URL}${comment.id}`, comment)
    .then((res) => {
      // console.log(`edit comment 57 ${res.data}`)
      dispatch({ type: COMMENT_SUC, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: COMMENT_FAIL, payload: err });
    });
};
//DELETE Comments
export const deleteComment = (comment) => (dispatch) => {
  dispatch({ type: COMMENT_REQ });
  axiosAuth()
    .put(`${COMMENT_URL}${comment.id}`, comment)
    .then((res) => {
      // console.log(`delete comment 70 ${res.data}`)
      dispatch({ type: COMMENT_SUC, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: COMMENT_FAIL, payload: err });
    });
};
