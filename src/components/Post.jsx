import React from 'react'
import { connect } from 'react-redux'

const Post = () => {


    return (
        <div>
            <h1>Posts</h1>
        </div>
    )
}

const mapStateToProps = state => {
    return {
      ...state,
    };
  };
  export default connect(mapStateToProps)(Post);