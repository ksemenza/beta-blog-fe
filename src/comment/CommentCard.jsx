import React from "react";
import { connect } from "react-redux";
import "../assets/css/comment.css";
import moment from "moment";

const CommentCard = (props) => {
  const POST_ID = localStorage.getItem("post_id");

  console.log(props);

  return (
    <div className="comment-card-cta">
      
      <div className="comment-card-top-wrap">
      <p> {props.author}</p>
      <p>
        {moment(props.created_at)
          .zone(+480)
          .format("MMMM D YYYY, h:mm a")}
      </p>
      </div>
      <p className="comment-card-comment"> {props.comment} </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(CommentCard);
