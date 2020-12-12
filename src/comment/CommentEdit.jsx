import React, { useState, useEffect } from 'react'
import { useHistory, Link } from "react-router-dom";
import { editComment } from './comment-action'
import { connect } from 'react-redux'

const CommentEdit = props => {

    let history = useHistory()
    console.log(props, 'CommentEdit 9')
    

    const [selectedComment, setSelectedComment] = useState(
        {
            id:props.comment.id,
            updated_at: Date(),
            comment:props.comment.comment,
            post_id:props.comment.post_id,
            // user_id:USER_ID,
        }
    )

    
        // Handle add new post submit
    const submitEditComment = (e) => {
        e.preventDefault()
        props.editPost(selectedPost)
        props.toggleEdit()
        setTimeout(() => {
            e.target.reset()
        }, 1500)
    }
    
            const onEditChange = (e) => {
            setSelectedComment({ ...selectedComment, [e.target.name]: e.target.value }) 
            console.log(selectedComment)
    }




    return (
        <div className='post-edit-cta'>
            <h2>Edit Comment</h2>

                   <form onSubmit={submitEditComment}>
                      
                        <div className='input-label-wrap'>
                            <label htmlFor='comment'>
                            Comment
                            </label>
                            <input
                            autoFocus
                            required
                            className='comment-input-text'
                            type='text'
                            name='comment'
                            id='comment'
                            placeholder={props.comment.comment}
                            onChange={onEditChange}
                            value={setSelectedComment.comment}
                            />                  
                        </div>

                    
                      
                 
                        <button type='submit'>Submit</button>

                    </form>
        
        </div>
    )
}

const mapStateToProps = state => {
    return {
        ...state,
    }
}

export default connect(mapStateToProps, {editComment})(CommentEdit)