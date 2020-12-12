import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { axiosAuth } from '../api/axiosAuth'

const Details = (props) => {

    const [comments, setComments] = useState([])
    const [posts, setPosts] = useState([])
    const [notifications, setNotifications] = useState([])

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
                             <h3>Posts</h3>
                     {posts.map((post) => (

                         <div>
                             <h6>Title { post.title}</h6>
                             <p>User ID: { post.user_id}</p>
                             <p>Post ID: { post.id}</p>
                             <p>Content: { post.content}</p>
                    
                    </div>
                ))}
                             <h3>Comments</h3>
                     {comments.map((comment) => (

                         <div>
                             <h6>Comment: { comment.comment}</h6>
                             <p>Comment ID { comment.id}</p>
                             <p>Post ID { comment.post_id}</p>
                             
                    
                    </div>
                ))}
        
        </div>
    )
}

const mapStateToProps = state => {
    return {
        ...state,
    }
}

export default connect(mapStateToProps)(Details)