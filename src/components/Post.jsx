import React,{ useEffect, useState } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { axiosAuth } from '../api/axiosAuth'
import PostModel from './PostModel'

const Post = () => {

    const [userPosts, setUserPosts] = useState([])
    const user_id = localStorage.getItem('user_id')
    const fname = localStorage.getItem('fname')
    
    useEffect(() => {
        axiosAuth()
        .get(`/auth/${user_id}/details`)
        .then((res) => {
            console.log(res.data)
            setUserPosts(res.data)
        })
        .catch((err) => {
            console.log(`Get User Post Error`, err)
        })
    },[user_id])

    return (
        <div className='post-cta'>
    <h2> {fname}'s Posts</h2>
        </div>
    )
}

const mapStateToProps = state => {
    return {
      ...state,
    };
  };
  export default connect(mapStateToProps)(Post);