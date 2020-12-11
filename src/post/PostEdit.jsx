import React, { useState, useContext, useEffect } from 'react'
import { useHistory, Link } from "react-router-dom";
import { editPost } from '../post/post-action'
import { connect } from 'react-redux'
import { POST_ID } from '../constants/local_storage'

const PostEdit = props => {

    let history = useHistory()


    console.log(props)

    const [selectedPost, setSelectedPost] = useState(
        {
            id: null,
            updatedAt: '',
            author:'',
            title:'',
            content:'',
            topic:'',
            // user_id:USER_ID,
        }
    )

    
        // Handle add new post submit
    const submitEditPost = (e) => {
        // e.preventDefault()
        props.editPost(selectedPost)
        props.toggleEditPost()
        setTimeout(() => {
            e.target.reset()
        }, 1500)
        }



    return (
        <div className='post-edit-cta'>
            <h2>Edit Post</h2>
        
        </div>
    )
}

const mapStateToProps = state => {
    return {
        ...state,
    }
}

export default connect(mapStateToProps, {editPost})(PostEdit)