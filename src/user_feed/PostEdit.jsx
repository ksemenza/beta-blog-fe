import React, { useState, useContext, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { editPost } from "../user_state/post-action";
import { connect } from "react-redux";

const PostEdit = (props) => {
  let history = useHistory();

  console.log(props.post.id);

  const [selectedPost, setSelectedPost] = useState({
    id: props.post.id,
    updated_at: Date(),
    title: props.post.title,
    content: props.post.content,
    topic: props.post.topic,
    // user_id:USER_ID,
  });

  // Handle add new post submit
  const submitEditPost = (e) => {
    e.preventDefault();
    props.editPost(selectedPost);
    props.toggleEdit();
    setTimeout(() => {
      e.target.reset();
    }, 1500);
  };

  const onEditChange = (e) => {
    setSelectedPost({ ...selectedPost, [e.target.name]: e.target.value });
    console.log(selectedPost);
  };

  return (
    <div className="post-edit-cta">
      <form onSubmit={submitEditPost}>
        <div className="input-label-wrap">
          <label htmlFor="content">Content</label>
          <textarea
            required
            className="post-textarea"
            required
            type="textarea"
            name="content"
            id="content"
            placeholder={props.post.content}
            onChange={onEditChange}
            value={selectedPost.content}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps, { editPost })(PostEdit);