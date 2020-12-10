import React,{ useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { axiosAuth } from '../api/axiosAuth'
import PostAdd from './PostAdd'
import { NavLink } from 'react-router-dom'
import { USER_URL, DETAILS_URL, POST_URL } from '../constants/endpoints'
import Comment from './Comment'
import '../assets/css/post.css'
import { POST_FAIL } from '../state-actions/post-action'


const Post = props => {

    // user's post from api return
    const [userPosts, setUserPosts] = useState([])

    // condition rendering add post component
    const [addPost, setAddPost] = useState(false)
    
    // variable assigned to userPosts' array
    let postList

    // local storage assigned in user action
    const user_id = localStorage.getItem('user_id')
    const fname = localStorage.getItem('fname')
    const lname = localStorage.getItem('lname')
    const username = localStorage.getItem('username')

    const handleClick = (e) => {
        setAddPost(!addPost)
    } 
    
    useEffect(() => {
                axiosAuth()
        .get(`${USER_URL}/${user_id}${DETAILS_URL}`)
  
                    .then((res) => {
            postList = res.data.posts
            console.log(postList)
            setUserPosts(postList)
        })
        .catch((err) => {
            console.log(`Get User Post Error`, err)
        })
    }, [user_id])
  


    return (
        <div className='post-cta'>
            <button onClick={handleClick}> {!addPost ? 'New Post' : 'Cancel'} </button>
{addPost ? <PostAdd toggleAddPost={handleClick}/> :
<div>
            <h4> {fname}'s Posts</h4>
            <div className='post-list-cta'>

              
                {userPosts.length > 0 ? 
                <div className='post-list-wrap'>

                    <div >
                        {userPosts.map(post => (
                      <div>
                            <article >
                                <h4>{post.title}</h4>
                        <p>by: {username} - {fname} {lname}</p>
                        <p>{post.content}</p>
                                    <p>{post.topic}</p>
                                  </article>
                                <div className='post-comment-wrap'>
                                     
                        <NavLink className='post-link' key={user_id} to={`/post/${post.id}`}>View Post</NavLink>
                           
                        <NavLink className='post-link' key={post.id} to={`/post/${post.id}/details`}>Comment</NavLink>
                                </div>
                              
                                </div>
                        ))}
                    </div>
                  
                            </div> : <h5>No Posts Available</h5>} </div>
                    
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