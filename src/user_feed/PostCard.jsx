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

  console.log(props)

  const [postSelected, setPostSelected] = useState({
    id: props.post_id,
    created_at: "",
    updated_at: "",
    title: "",
    content: "",
    topic: "",
  });

  const handleClickEdit = () => {
    setPostEditing(!postEditing);
  }


  return (
    <div className="post-view-cta">
      <button onClick={handleClickEdit}>
        {!postEditing ? "Edit" : "Cancel"}
      </button>
      {postEditing ? (
        <PostEdit
          post_id={props.post_id}
          author={props.author}
          content={props.content}

        />
      ): (
               <div>
      <div className='post-name-date-wrap'>
      <p className="post_author_text"> {props.author} </p>
      <p>
        {moment(props.created_at)
          .zone(+480)
          .format("MMMM D YYYY, h:mm a")}
        </p>
        </div>
        <h6 className='post-view-content'> {props.content} </h6>
        </div>
          
      )
      }
 
    </div>

  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps, { editPost, deletePost })(PostCard);
