import { connect } from "react-redux";
import React, { useState, useContext, useEffect } from "react";
import { useHistory, NavLink } from "react-router-dom";
import { editPost } from "./post-action";

const PostCard = (props) => {

    console.log(props)

  return (
    <div className="post-view-cta">
      <h5>{props.author} </h5>
      
      <h6>{props.title}</h6>
      <p> {props.content} </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps, { editPost })(PostCard);
