import React, { useState, useEffect } from "react";
import { axiosAuth } from "../api/axiosAuth";
import { useHistory } from "react-router-dom";
import { addComment } from "../user_state/comment-action";
import { connect } from "react-redux";
import { COMMENT_URL } from "../constants/endpoints";
import { USERNAME, FULL_NAME } from '../constants/local_storage'
import '../assets/css/comment.css'

const CommentAdd = (props) => {

  console.log(FULL_NAME)

  const history = useHistory();
  const [newComment, setNewComment] = useState({
    author: FULL_NAME,
    comment: "",
    post_id: props.post_id
  });

  console.log(props.post_id)

  // Handle add new comment submit
  const handleSubmitComment = (e) => {
    props.addComment(newComment);
    setTimeout(() => {
      e.target.reset();
    }, 1500);
  };


  const handleChangeComment = (e) => {
    e.preventDefault()
    setNewComment({ ...newComment, [e.target.name]: e.target.value })
        setTimeout(() => {}, 1500);
  };
  
  console.log(newComment)
  return (
    <div className="comment-add-cta">
      <div className="comment-add-form-cta">
        <form className="comment-add-form" onSubmit={handleSubmitComment}>
          <div className="input-label-wrap">
            <textarea
              required
              className="comment-textarea"
              required
              type="textarea"
              name="comment"
              id="comment"
              placeholder="Comment"
              onChange={handleChangeComment}
              value={newComment.comment}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { addComment })(CommentAdd);
