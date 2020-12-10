import React from 'react'
import {connect} from 'react-redux'

const CommentCard = props => {

    return (
        <div className='comment-view-cta'>
            <h6>author {props.author}</h6>
            <p> {props.comment} </p>
                
        </div>
    )
}

const mapStateToProps = state => {
    return {
        ...state,
    }
}

export default connect(mapStateToProps)(CommentCard)