import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { axiosAuth } from '../api/axiosAuth'
import {USER_ID} from '../constants/local_storage'

const Details = (props) => {

    const [comments, setComments] = useState([])
    const [posts, setPosts] = useState([])
    const [notifications, setNotifications] = useState([])

    // console.log(props.location.pathname)

        useEffect(() => {
         axiosAuth()
        .get(`${props.location.pathname}`)
  
             .then((res) => {
                 console.log(res.data)
                 setPosts(res.data.posts)
                 setComments(res.data.comments)
                 setNotifications(res.data.notifications)
        })
        .catch((err) => {
            console.log(`Get User Post Error`, err)
        })
    
    }, [])

    console.log('posts',posts)
    console.log('comments',comments)
    console.log('notifications',notifications)

    return (
        <div className='post-view-cta'>
            <h2></h2>
        
        </div>
    )
}

const mapStateToProps = state => {
    return {
        ...state,
    }
}

export default connect(mapStateToProps)(Details)