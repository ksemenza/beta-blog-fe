import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { axiosAuth } from '../api/axiosAuth'
import { NavLink } from 'react-router-dom'
import { USER_URL, DETAILS_URL, COMMENT_URL, POST_URL } from '../constants/endpoints'
import '../assets/css/comment.css'
import '../assets/css/post.css'
import CommentAdd from './CommentAdd'


const Comment = props => {

    // Post's Comment List 
    const [postsComment, setPostsComment] = useState([])

    // Conditional to render add comment component
    const [addComment, setAddComment] = useState(false)
    
    const post_id = props.match.params.id;
    // variable assigned to postsComment's array
    let commentList

       const user_id = localStorage.getItem('user_id')
    const fname = localStorage.getItem('fname')
    const lname = localStorage.getItem('lname')
    const username = localStorage.getItem('username')


    const handleClick = (e) => {
        e.preventDefault()
        setAddComment(!addComment)
    }
        
            useEffect(() => {
                axiosAuth()
        .get(`${props.location.pathname}`)
  
                    .then((res) => {
                        commentList = res.data.comments
                        setPostsComment(commentList)

        })
        .catch((err) => {
            console.log(`Get User Post Error`, err)
        })
    },[])
    
    console.log(postsComment)

    return (
        <div className='comment-cta'>
            <h6>Comments</h6>
        <div className='post-link'>
            <NavLink className='post-link' to={`/post/${post_id}`}>Post</NavLink>
            <NavLink className='post-link' to={`/post`}>Back</NavLink>
            </div>

            <div className='comment-list-wrap'>
                <button onClick={handleClick}> {!addComment ? 'Add Comment' : 'Cancel'} </button>

                {addComment ? <CommentAdd toggleAddComment={handleClick} /> :
                    <div className='comment-list-cta'>
                        {
                            postsComment.length > 0 ?
                                <div className='comment-list-wrap'>
                                    <div>
                                        {postsComment.map((comment, key) => (
                                            <div>
                                                <article>
                                                    <h4> {comment.comment} </h4>
                                                </article>
                                            </div>
                                        ))}
                                    </div>
                                </div> : <h6> No Comments  </h6>
                        }
                    </div>
                 }
            </div>
        </div> 
            
    )
    }




const mapStateToProps = state => {
    return {
      ...state,
    };
  };
  export default connect(mapStateToProps)(Comment);