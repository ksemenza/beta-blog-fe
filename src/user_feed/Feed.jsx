import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { axiosAuth } from "../api/axiosAuth";
import moment from "moment";
import CommentCard from "../comment/CommentCard";
import CommentAdd from "../comment/CommentAdd";

import { COMMENT_URL, POST_URL } from "../constants/endpoints";

const Feed = (props) => {
  const [postsComment, setPostsComment] = useState([]);
  const [postID, setPostID] = useState([]);
  const [activeUsername, setActiveUsername] = useState([]);

  const first_name = localStorage.getItem("first_name");

  console.log(first_name);

  console.log(props);

  useEffect(() => {
    axiosAuth()
      .get(`${COMMENT_URL}/${props.post_id}/details`)
      .then((res) => {
        console.log(res.data.posts.comments);
        setPostsComment(res.data.posts.comments);
        setActiveUsername(res.data.posts.user_id);
        setPostID(res.data.posts.id);
      })
      .catch((err) => {
        console.log(`Get User Post Error`, err);
      });
  }, []);

  // console.log(postsComment)

  return (
    <div className="feed-view-cta">
      <div className="main-cta-list">
        <h6 className="post_author_text"> {props.author} </h6>
        <h6>
          {moment(props.created_at)
            .zone(+480)
            .format("MMMM D YYYY, h:mm a")}
        </h6>
        {/* <p>{props.title} </p> */}
        <p className="post_content_text">{props.content} </p>
      </div>
      <div className="post-comment-map">
        {/* <PostComment/> */}
        <CommentAdd user_id={activeUsername} post_id={props.post_id} />

        {postsComment.map((comments) => (
          <div>
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
