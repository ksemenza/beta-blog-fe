import { connect } from "react-redux";
import React, { useState, useContext, useEffect } from "react";
import { useHistory, NavLink } from "react-router-dom";
import { editPost } from "../user_state/post-action";
import moment from "moment";

const PostCard = (props) => {
  console.log(props);

  return (
    <div className="post-view-cta">
      <h6 className="post_author_text"> {props.author} </h6>
      <h6>
        {moment(props.created_at)
          .zone(+480)
          .format("MMMM D YYYY, h:mm a")}
      </h6>
      <p className="post_content_text">{props.content} </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps, { editPost })(PostCard);
