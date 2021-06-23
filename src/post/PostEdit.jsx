import React, { useState, useContext, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { editPost } from "../post/post-action";
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
        {/* <div className="input-label-wrap">
          <label htmlFor="title">Title</label>
          <input
            autoFocus
            required
            className="post-input-title"
            type="text"
            name="title"
            id="title"
            placeholder={props.post.title}
            onChange={onEditChange}
            value={selectedPost.title}
          />
        </div>

        <div className="input-label-wrap">
          <label htmlFor="topic">topics</label>
          <input
            required
            className="post-input"
            required
            type="text"
            name="topic"
            id="topic"
            placeholder={props.post.topics}
            onChange={onEditChange}
            value={selectedPost.topic}
          />
        </div> */}

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
