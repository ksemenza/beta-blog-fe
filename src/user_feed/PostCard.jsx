import { connect } from "react-redux";
import React, { useState, useContext, useEffect } from "react";
import { useHistory, NavLink } from "react-router-dom";
import { editPost, deletePost } from "../user_state/post-action";
import { HOME_PAGE } from '../constants/endpoints'
import moment from "moment";
import axiosAuth from "../api/axiosAuth";
import PostEdit from './PostEdit'

const PostCard = (props) => {

  const [postId, setPostId] = useState("");
  const [postEditing, setPostEditing] = useState(false);

  const history = useHistory();

  const [postSelected, setPostSelected] = useState({
    id: props.post_id,
    created_at:"",
    updated_at: "",
    title: "",
    content: "",
    topic: "",
  });


  return (
    <div className="post-view-cta">
      <div className='post-name-date-wrap'>
      <p className="post_author_text"> {props.author} </p>
      <p>
        {moment(props.created_at)
          .zone(+480)
          .format("MMMM D YYYY, h:mm a")}
        </p>
        </div>
      <p className='post-view-content'> {props.content} </p>
    </div>

  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps, { editPost, deletePost })(PostCard);
