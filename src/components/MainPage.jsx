import React, { useEffect, useState } from 'react'
import {NavLink} from 'react-router-dom'
import {axiosAuth} from '../api/axiosAuth'
import { connect } from 'react-redux'
import { POST_URL } from '../constants/endpoints'
import Comment from '../comment/Comment'
import '../assets/css/main-page.css'

// RETURNS ALL POST IN SYSTEM
const MainPage = (props) => {

    const [postList, setPostList] = useState([])
    const user_id = localStorage.getItem('user_id')

    useEffect(() => {
         axiosAuth()
        .get(`${POST_URL}`)
  
        .then((res) => {
            console.log(res.data)
            setPostList(res.data)

        })
        .catch((err) => {
            console.log(`Get User Post Error`, err)
        })
    
    }, [])

    console.log(postList)

    return (
        <div className='post-view-cta'>
            <h2></h2>
            {postList.length > 0 ?
                <div>
                    {postList.map(posts => (
                        <div className='main-cta-list'>
                            <h5>{posts.title} </h5>
                            <h6>author: {posts.author} </h6>
                            <p>{posts.content} </p>
                            <NavLink className='post-link' to={`/post/${posts.id}`}>View Post</NavLink>
                        </div>
                    ))}
                </div>
                : <h5>Site under maintenance please check in later</h5>
            
        } 
        
        </div>
    )
}

const mapStateToProps = state => {
    return {
        ...state,
    }
}

export default connect(mapStateToProps)(MainPage)