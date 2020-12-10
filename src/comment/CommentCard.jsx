import React from 'react'
import {connect} from 'react-redux'

const CommentCard = props => {

    console.log(props.key)
    return (
        <div className='comment-view-cta'>
            <h2>{props.author}</h2>
            <p>author {props.comment} </p>
            
        
        </div>
    )
}

const mapStateToProps = state => {
    return {
        ...state,
    }
}

export default connect(mapStateToProps)(CommentCard)