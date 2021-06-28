import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { axiosAuth } from "../api/axiosAuth";
import { editPost, deletePost } from "../user_state/post-action";
import { Link, useHistory } from 'react-router-dom'
import moment from "moment";
import CommentCard from "../comment/CommentCard";
import CommentAdd from "../comment/CommentAdd";
import '../assets/css/feed.css'

import { COMMENT_URL, POST_URL } from "../constants/endpoints";
import PostCard from "./PostCard";

const Feed = (props) => {

  const history = useHistory()
  const [postsComment, setPostsComment] = useState([]);
  const [postID, setPostID] = useState(props.post_id);
  const [activeUsername, setActiveUsername] = useState([]);

    const [commentAdd, setCommentAdd] = useState(false);


    const [postSelected, setPostSelected] = useState({
      id: "",
      created_at: "",
      updated_at: "",
      title: "",
      content: "",
      topic: "",
    });
  
  
  const onClickEdit = () => {
    setPostEditing(!postEditing);
  };

  const onClickDelete = () => {
    props.deletePost(postSelected);
    history.push(`/homepage`);
  };
  
  const handleClickCommitBtn = () => {
    setCommentAdd(!commentAdd);
  }

  console.log(props)
  

  useEffect(() => {
    axiosAuth()
      .get(`${COMMENT_URL}/${props.post_id}/details`)
      .then((res) => {
        // console.log(res.data.posts.comments);
        setPostsComment(res.data.posts.comments);
        setActiveUsername(res.data.posts.user_id);
      })
      .catch((err) => {
        console.log(`Get User Post Error`, err);
      });
  }, []);

  return (
    <div className="feed-view-cta">
      <div className="main-cta-list">
        <PostCard
          key={props.post_id}
          author={props.author}
          created_at={props.created_at}
          content={props.content}
        />
        <div className="post-comment-map">
          <CommentAdd post_id={props.post_id} />
          <h6>Comments</h6>
          {postsComment.map((comments) => (
            <div className="comment-card-list-cta">
              <CommentCard
                comment_id={comments.id}
                author={comments.author}
                comment={comments.comment}
                post_id={comments.post_id}
                created_at={comments.created_at}
                updated_at={comments.updated_at}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps, {editPost, deletePost})(Feed);
