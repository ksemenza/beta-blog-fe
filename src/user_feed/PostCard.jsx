import { connect } from "react-redux";
import React, { useState, useContext, useEffect } from "react";
import { useHistory, NavLink } from "react-router-dom";
import { editPost } from "../user_state/post-action";
import moment from "moment";

const PostCard = (props) => {
  console.log(props);

  return (
    <div className="post-view-cta">
      <p></p>
      <h5>{props.author} </h5>
      <p>
        {" "}
        <p> {moment(props.created_at).format("MMM D YYYY, h:mm a")} </p>
      </p>
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
