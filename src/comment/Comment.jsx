import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { axiosAuth } from '../api/axiosAuth'
import { NavLink } from 'react-router-dom'
import { USER_URL, DETAILS_URL, COMMENT_URL, POST_URL } from '../constants/endpoints'
import '../assets/css/comment.css'
import '../assets/css/post.css'
import CommentAdd from './CommentAdd'
import CommentCard from '../comment/CommentCard'
import { USER_ID } from '../constants/local_storage'
import CommentFeed from './CommentFeed'



const Comment = props => {

    console.log(props.match.params.id)

    localStorage.setItem('post_id', props.match.params.id)

    // Post's Comment List 
    const [postsComment, setPostsComment] = useState([])
    const [postTitle, setPostsTitle] = useState('')
    const [postContent, setPostsContent] = useState('')
    const [postUpdated, setPostsUpdated] = useState('')
    const [postTopic, setPostsTopic] = useState([])
    const [postDetails, setPostsDetails] = useState([])
    
 

    // Conditional to render add comment component
    const [addComment, setAddComment] = useState(false)
    
    const post_id = props.match.params.id;
    // variable assigned to postsComment's array
    let commentList


//   localStorage.setItem('post_id',props.match.params.id)    



    const handleClick = (e) => {
        setAddComment(!addComment)
    }
            console.log(postsComment)

            useEffect(() => {
                axiosAuth()
        .get(`${POST_URL}/${post_id}${DETAILS_URL}`)
  
                    .then((res) => {
                        console.log(res.data)
                        commentList = res.data.comments
                        setPostsDetails(res.data)
                        setPostsComment(commentList)
                        setPostsTitle(res.data.title)
                        setPostsContent(res.data.content)

        })
        .catch((err) => {
            console.log(`Get User Post Error`, err)
        })
    },[])
    

    console.log(postDetails)
    console.log(postTitle)
    console.log(postTitle)

    return (
        <div className='comment-cta'>
            <h6>Comments</h6>
        <div className='post-link'>
            <NavLink className='post-link' to={`/post/${post_id}`}>Post</NavLink>
            <NavLink className='post-link' to={`/post`}>Back</NavLink>
            </div>

            {/* <CommentFeed/> */}
            <div className='comment-list-wrap'>
                <button onClick={handleClick}> {!addComment ? 'Add Comment' : 'Cancel'} </button>

                {postsComment ? <CommentAdd toggleAddComment={handleClick} /> :
                    <div className='comment-list-cta'>
                        {
                            postsComment.length > 0 ?
                                <div className='comment-list-wrap'>
                                    <div>
                                        {postsComment.map((comment)  => (
                                            <div>
                                                {/* <CommentCard 
                                                    key={comment.id}
                                                    comment={comment.comment}
                                                    author={comment.author}
                                                /> */}
                                                <NavLink className='comment-link' to={`/comment/${comment.id}`}>View comment</NavLink>
                                            </div>
                                        ))}
                                    </div>
                                </div> : <h6> No Comments  </h6>
                        }
                    </div>
                }
                
                {postsComment.map((comment) => (

                    <div>
                        <CommentCard key={comment.id} comment = {comment.comment} author={comment.author} post_id = {comment.post_id} />

                        {/* <h2>{comment.author}</h2>
                        <h2>{comment.comment}</h2> */}
                    </div>
                ))}
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