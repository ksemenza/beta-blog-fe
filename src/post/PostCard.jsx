import {connect} from 'react-redux'
import React, { useState, useContext, useEffect } from 'react';
import { useHistory, NavLink } from "react-router-dom";
import { editPost } from './post-action'


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

export default connect(mapStateToProps, {editPost})(PostCard)