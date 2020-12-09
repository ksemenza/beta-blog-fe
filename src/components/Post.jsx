import React,{ useEffect, useState } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { axiosAuth } from '../api/axiosAuth'
import PostModel from './PostModel'
import PostAdd from './PostAdd'
import {addPost} from '../state-actions/post-action'

const Post = () => {

    const [userPosts, setUserPosts] = useState([])
    const [username, setUsername] = useState('')
    const[addPost, setAddPost] = useState(false)


    const user_id = localStorage.getItem('user_id')
    const fname = localStorage.getItem('fname')
    const lname = localStorage.getItem('lname')

    const handleClick = (e) => {
        setAddPost(!addPost)
    } 
    
    useEffect(() => {
                axiosAuth()
        .get(`/auth/${user_id}/details`)
        .then((res) => {
            console.log(res.data)
            setUserPosts(res.data.posts)
            setUsername(res.data.username)
        })
        .catch((err) => {
            console.log(`Get User Post Error`, err)
        })
    },[user_id])

    return (
        <div className='post-cta'>
            <button onClick={handleClick}> {!addPost ? 'New Post' : 'Cancel'} </button>
{addPost ? <PostAdd toggleAddPost={handleClick}/> :
<div>
            <h2> {fname}'s Posts</h2>
            <div className='post-list-cta'>

              
                {userPosts.length > 0 ? 
                <div className='post-list-wrap'>

                    <div>
                        {userPosts.map(post => (
                            <div>
                                <h4>{post.title}</h4>
                        <p>by: {username} - {fname} {lname}</p>
                        <p>{post.content}</p>
                            </div>
                        ))}
                    </div>

                    <h4 className='post-text-label'>
                        Title
                    </h4>
                    <p className='post-text-p'>
                        {userPosts.title}
                    </p>
                <p>Author: {username}</p>
                    <h5 className='post-text-label'>
                        content
                    </h5>
                    <p className='post-text-p'>
                        {userPosts.content}
                    </p>

                </div> : <h5>No Posts Available</h5> } </div>
                        </div> 
}
        </div>
    )
}

const mapStateToProps = state => {
    return {
      ...state,
    };
  };
  export default connect(mapStateToProps)(Post);