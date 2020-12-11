import React from 'react'
import {connect} from 'react-redux'
import PostEdit from './PostEdit'

const PostCard = props => {

    return (
        <div className='post-view-cta'>
            <h2>{props.title}</h2>
            <h5>author {props.author} </h5>
            <p> {props.content} </p>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        ...state,
    }
}

export default connect(mapStateToProps)(PostCard)