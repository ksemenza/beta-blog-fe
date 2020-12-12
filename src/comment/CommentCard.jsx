import React from 'react'
import { connect } from 'react-redux'

const CommentCard = props => {

        
    const POST_ID = localStorage.getItem('post_id')

    
    console.log(props)


    return (
        <div className='comment-view-cta'>
            <h6>author {props.author}</h6>
            <p> {props.comment} </p>
            <p> post id {props.post_id} </p>
                
        </div>
    )
}

const mapStateToProps = state => {
    return {
        ...state,
    }
}

export default connect(mapStateToProps)(CommentCard)