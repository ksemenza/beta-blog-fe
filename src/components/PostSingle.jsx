import React, { useEffect, useState } from 'react'
import {NavLink} from 'react-router-dom'
import {axiosAuth} from '../api/axiosAuth'

const PostSingle = (props) => {

    const [post, setPost] = useState('')
    console.log(props.location.pathname)
    
     useEffect(() => {
                axiosAuth()
        .get(`${props.location.pathname}`)
  
                    .then((res) => {
                        console.log(res.data)
                        setPost(res.data)
        })
        .catch((err) => {
            console.log(`Get User Post Error`, err)
        })
     }, [])
    
    console.log(post.title)

    return (
        <div className='post-view-cta'>
            <h2>{post.title}</h2>
            <p>{post.content}</p> 
            <NavLink to='/post'>back</NavLink>
        
        </div>
    )
}

export default PostSingle