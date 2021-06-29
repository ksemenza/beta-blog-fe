import { connect } from "react-redux";
import React, { useState, useContext, useEffect } from "react";
import { useHistory, NavLink } from "react-router-dom";
import { editPost, deletePost } from "../user_state/post-action";
import { POST_URL } from '../constants/endpoints'
import { USER_ID } from '../constants/local_storage'
import moment from "moment";
import axiosAuth from "../api/axiosAuth";
import PostEdit from './PostEdit'

const PostCard = (props) => {

  const [postId, setPostId] = useState("");
  const [postEditing, setPostEditing] = useState(false);
  const userID = localStorage.getItem("user_id")

  const history = useHistory();

  console.log(props)

  const [postSelected, setPostSelected] = useState({
    post_id: props.post_id,
    created_at: "",
    updated_at: "",
    title: "",
    content: "",
    topic: "",
    user_id:userID
  });

    useEffect(() => {
      axiosAuth()
        .get(`post/${postSelected.post_id}`)
        .then((res) => {
          console.log(res.data.id);
          setPostSelected(res.data);
          localStorage.setItem("post_id", res.data.id);
          setPostId(res.data.id);
        })
        .catch((err) => {
          console.log(`Get User Post Error`, err);
        });
    }, []);


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
          post_id={postId}
          content={postSelected.content}
          user_id={postSelected.user_id}
          history={history}
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
