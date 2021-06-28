import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { axiosAuth } from "../api/axiosAuth";
import { Link } from 'react-router-dom'
import moment from "moment";
import CommentCard from "../comment/CommentCard";
import CommentAdd from "../comment/CommentAdd";
import '../assets/css/feed.css'

import { COMMENT_URL, POST_URL } from "../constants/endpoints";
import PostCard from "./PostCard";

const Feed = (props) => {
  const [postsComment, setPostsComment] = useState([]);
  const [postID, setPostID] = useState();
  const [activeUsername, setActiveUsername] = useState([]);

  const first_name = localStorage.getItem("first_name");
  const user_id = localStorage.getItem("user_id");
  const username = localStorage.getItem("username");

  console.log(props)


  useEffect(() => {
    axiosAuth()
      .get(`${COMMENT_URL}/${props.post_id}/details`)
      .then((res) => {
        console.log(res.data.posts.comments);
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
      </div>
      <div className="post-comment-map">
        <h6>Comments</h6>
        <CommentAdd post_id={props.post_id} />
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
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(Feed);
