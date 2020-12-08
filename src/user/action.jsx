import axios from 'axios'
import React from 'react'
import {axiosAuth} from './axiosAuth'


export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

let userID

//REGISTER USER START
export const registerUser = (newUser, history) => dispatch => {
    console.log(`action register`)
    dispatch({ type: REGISTER_REQUEST });
    axios
      .post(`http://localhost:8080/api/auth/register`, newUser)
      .then(res => {
        dispatch({ type: REGISTER_SUCCESS, payload: res.data });
        localStorage.setItem('token',res.data.token)
        history.push("/");
      })
      .catch(err => {
        dispatch({ type: REGISTER_FAILURE, payload:err.res });
      });
  };
  
  //LOGIN USER START
  export const loginUser = (user, history) => dispatch => {
    dispatch({ type: LOGIN_REQUEST });
    // axios.post("http://localhost:7000/api/auth/login", user )
    axiosAuth().post(`/auth/login`, user )
    
      .then(res => {
          console.log(res.data.user.password)
        localStorage.setItem('token', res.data.token)
        // localStorage.setItem('userID', res.data.user.id)
        // localStorage.setItem('fname', res.data.user.first_name)
        // localStorage.setItem('lname', res.data.user.last_name)
        // localStorage.setItem('username', res.data.user.username)
        // localStorage.setItem('email', res.data.user.email)
        // localStorage.setItem('password', res.data.user.password)

        dispatch({type:LOGIN_SUCCESS, payload: res.data})  
        history.push('/homepage')
      })
      .catch(err => {
        dispatch({ type: LOGIN_FAILURE, payload: err.res });
      });
  };
  //LOGOUT USER START
  export const logoutUser = (user, history) => dispatch => {
    dispatch({ type: LOGOUT_REQUEST });
    localStorage.removeItem("token");
    const tokenCheck = localStorage.getItem("token");
    if (tokenCheck === null) {
      dispatch({ type: LOGOUT_SUCCESS })      
    } else {
      dispatch({ type: LOGOUT_FAILURE });
    }
  };

    //CABINET USER START

    console.log(userID)

    /*
    export const cabinetUser = (cabinet, history) => dispatch => {
      let user_id = localStorage.get('user_id', res.data.id)
      dispatch({ type: LOGIN_REQUEST });
      axios.post(`http://localhost:7000/api/strains/${usre}`, cabinet )
        .then(res => {
          localStorage.setItem('user_id', res.data.id)
          dispatch({type:CABINET_SUCCESS, payload: res.data})  
          history.push('/cabinet')
        })
        .catch(err => {
          dispatch({ type: CABINET_FAILURE, payload: err.data });
        });
    };
  */