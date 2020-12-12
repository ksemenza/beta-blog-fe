import React from 'react'
import {connect} from 'react-redux'

const CommentFeed = () => {

    const POST_ID = localStorage.getItem('post_id')

    console.log(POST_ID)

    return (
        <div className='post-view-cta'>
            <h2>Comment Feed</h2>
        
        </div>
    )
}

const mapStateToProps = state => {
    return {
        ...state,
    }
}

export default connect(mapStateToProps)(CommentFeed)