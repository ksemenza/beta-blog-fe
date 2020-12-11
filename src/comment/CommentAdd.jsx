import React, { useState, useEffect } from 'react'
import { axiosAuth } from '../api/axiosAuth'
import {useHistory} from 'react-router-dom'
import {addComment} from './comment-action'
import { connect } from 'react-redux'
import { COMMENT_URL } from '../constants/endpoints'

const CommentAdd = props => {
    
    console.log(props)

    const POST_ID = localStorage.getItem('post_id')
    const USERNAME = localStorage.getItem('username')
    console.log(POST_ID)

    const history = useHistory()

        console.log(history)


    const[newComment, setNewComment] = useState(
        {
            author:USERNAME,
            comment:'',
            post_id:POST_ID
        }
    )


    


    
    // Handle add new comment submit
    const handleSubmitComment = (e) => {
        // e.preventDefault()
        props.addComment(newComment)
        
        props.toggleAddComment()
        
        setTimeout(() => {
            e.target.reset()
        }, 1500)
        }

    const handleChangeComment = e => {
        e.persist();
        setNewComment({...newComment, [e.target.name]: e.target.value})

    }
    
    console.log(newComment)

        return(
            <div className='comment-add-cta'>
                <div className='comment-add-form-cta'>
                    <form onSubmit={handleSubmitComment}>
                      
                        <div className='input-label-wrap'>
                            <label htmlFor='comment'>
                                Comment
                            </label>
                            <textarea
                                autoFocus
                            
                            required
                            className='comment-textarea'
                            required
                            type='textarea'
                            name='comment'
                            id='comment'
                            placeholder='Comment'
                            onChange={handleChangeComment}
                            value={newComment.comment}
                            />                  
                        </div>
                      
                 
                        <button type='submit'>Submit</button>

                    </form>
                </div>

            </div>
        )
}


const mapStateToProps = state => {
    return state;
  };
  
  export default connect(
    mapStateToProps,
    { addComment }
  )(CommentAdd);