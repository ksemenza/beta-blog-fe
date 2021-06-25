import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { addPost } from "../user_state/post-action";
import { connect } from "react-redux";
import Tag from "../tag/Tag";

const PostAdd = (props) => {
  console.log(props)


  const USER_ID = localStorage.getItem("user_id");
  const USERNAME = localStorage.getItem("username");

  const [newPost, setNewPost] = useState({
    author: USERNAME,
    title: "",
    content: "",
    topic: "",
    user_id: USER_ID,
  });

  // Handle add new post submit
  const handleSubmitPost = (e) => {
    props.addPost(newPost);
    props.toggleAddPost();
    setTimeout(() => {
      e.target.reset();
    }, 1500);
  };

  const handleChangePost = (e) => {
    e.preventDefault()
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
    setTimeout(() => {
      
    }, 1500)
  };

  return (
    <div className="post-add-cta">
      <div className="post-add-form-cta">
        <form onSubmit={handleSubmitPost}>
          <div className="input-label-wrap">
            <textarea
              required
              className="post-textarea"
              type="textarea"
              name="content"
              id="content"
              placeholder="Share Thoughts"
              onChange={handleChangePost}
              value={newPost.content}
            />
          </div>
      
            <button type="submit">Share</button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { addPost })(PostAdd);
