import React, { useEffect, useState } from 'react'
import {useHistory} from 'react-router-dom'
import {NavLink} from 'react-router-dom'
import { axiosAuth } from '../api/axiosAuth'
import { USER_ID, USERNAME } from '../constants/local_storage'
import { editPost, deletePost } from './post-action'
import { connect } from 'react-redux'
import PostEdit from './PostEdit'


const PostSingle = (props) => {

    const [post, setPost] = useState('')
    const [editing, setEditing] = useState(false)
    const [postId, setPostId] = useState('')
    // console.log(props.location.pathname)


    const history = useHistory()

    const currId = props.match.params

    const deletePost = () => {
        props.deletePost(post
        )

    }

    console.log(post)

        const [selectedPost, setSelectedPost] = useState(
            {
            id:post.id,
            updatedAt: post.updatedAt,
            updatedAt: post.createdAt,
            updatedAt: post.author,
            title:post.title,
            content:post.content,
            topic: post.topic,
            user_id: post.user_id
            
        }
    )


     useEffect(() => {
        axiosAuth()
        .get(`${props.location.pathname}`)
        .then((res) => {
            setSelectedPost(res.data)
            localStorage.setItem('post_id', res.data.id)
            console.log(res.data)
            
        })
        .catch((err) => {
            console.log(`Get User Post Error`, err)
        })
     }, [])
    
       const [editedPost, setEditedPost] = useState(
        {
            title:selectedPost.title,
            content:selectedPost.content,
            topic:selectedPost.topic,
        }
    )


    const onClickEdit = () => {
        setEditing(!editing)
    }

        const onEditSubmit = e => {
        e.preventDefault()
        // props.toggleAddPost()
        editPost(selectedPost) 
        history.push(`/post`)
 
 
    }

/*
    const onEditChange = e => {
        console.log(e.target)
              setSelectedPost({
                  ...selectedPost,
                  [e.target.name]: e.target.value
              })
        //        if (!selectedPost || selectedPost.id) {
        //         return <div>Post ID {postId} was not found </div>
        // }
    }
    */
    

    return (
        <div className='post-single-cta'>
            <h2>{selectedPost.title}</h2>
            <p>{selectedPost.content}</p> 
            <NavLink to='/post'>back</NavLink>      

                <button onClick={onClickEdit}>{editing ? 'Back' : 'Edit'} </button>
                { editing && selectedPost && <PostEdit post={selectedPost} toggleEdit={onClickEdit} />}
                        
             
        </div>
    )
}

const mapStateToProps = state => {
    return {
        ...state,
    }
}

export default connect(mapStateToProps, {editPost, deletePost})(PostSingle)