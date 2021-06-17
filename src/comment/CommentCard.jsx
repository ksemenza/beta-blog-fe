import React from "react";
import { connect } from "react-redux";
import "../assets/css/comment.css";

const CommentCard = (props) => {
  const POST_ID = localStorage.getItem("post_id");

  console.log(props);

  return (
    <div className="comment-card-cta">
      <h6>author {props.author}</h6>
      <p> {props.comment} </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(CommentCard);
