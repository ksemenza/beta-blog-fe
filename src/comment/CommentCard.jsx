import React from "react";
import { connect } from "react-redux";
import "../assets/css/comment.css";
import moment from "moment";


const CommentCard = (props) => {
  const POST_ID = localStorage.getItem("post_id");

  console.log(props);

  return (
    <div className="comment-card-cta">
      <h6> {props.author}</h6>
      <p className="post_date_text">
        {" "}
        {moment(props.created_at).format("MMMM Do YYYY, h:mm a")}{" "}
      </p>
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
