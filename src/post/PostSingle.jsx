import React, { useEffect, useState } from 'react'
import {useHistory} from 'react-router-dom'
import {NavLink} from 'react-router-dom'
import { axiosAuth } from '../api/axiosAuth'
import { USER_ID, USERNAME } from '../constants/local_storage'
import { editPost, deletePost } from './post-action'
import { connect } from 'react-redux'
import PostEdit from './PostEdit'
import CommentCard from '../comment/CommentCard'



const PostSingle = (props) => {

    const [post, setPost] = useState('')
    const [editing, setEditing] = useState(false)


    const history = useHistory()

    const currId = props.match.params

    console.log(post)

 
        const [selectedPost, setSelectedPost] = useState(
            {
            id:'',
            updatedAt:'',
            updatedAt: '',
            title:'',
            content:'',
            topic: '',
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


    const onClickEdit = () => {
        setEditing(!editing)
    }

       const onClickDelete = () => {
         props.deletePost(selectedPost)
           props.history.push(`/post`)

    }


    return (
        <div className='post-single-cta'>
            <h2>{selectedPost.title}</h2>
            <p>{selectedPost.content}</p> 
            <NavLink to='/post'>back</NavLink>     
                                            <CommentCard/>


                <button onClick={onClickEdit}>{editing ? 'Back' : 'Edit'} </button>
            { editing && selectedPost && <PostEdit post={selectedPost} toggleEdit={onClickEdit} />}
            <button onClick={onClickDelete}>Delete</button>
                        
             
        </div>
    )
}

const mapStateToProps = state => {
    return {
        ...state,
    }
}

export default connect(mapStateToProps, {editPost, deletePost})(PostSingle)