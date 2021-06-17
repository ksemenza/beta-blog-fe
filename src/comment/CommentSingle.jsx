import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { axiosAuth } from "../api/axiosAuth";
import { editComment, deleteComment } from "./comment-action";

const CommentSingle = (props) => {
  const [deleteComment, setDeleteComment] = useState(false);
  const [editing, setEditing] = useState(false);

  const [selectedComment, setSelectedComment] = useState({
    id: "",
    comment: "",
    post_id: "",
  });

  const onClickEdit = () => {
    setEditing(!editing);
  };

  const onClickDelete = () => {
    props.deleteComment(selectedComment);
    props.history.push(`/comment`);
  };

  useEffect(() => {
    axiosAuth()
      .get(`${props.location.pathname}`)
      .then((res) => {
        setSelectedComment(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(`Get User Post Error`, err);
      });
  }, []);

  return (
    <div className="comment-view-cta">
      <h6>author {props.author}</h6>
      <p> {props.comment} </p>

      <button onClick={onClickDelete}>Delete</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps, { deleteComment, editComment })(
  CommentSingle
);
