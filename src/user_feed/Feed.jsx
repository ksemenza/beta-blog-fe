import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { axiosAuth } from "../api/axiosAuth";
import moment from "moment";
import CommentCard from '../comment/CommentCard'
import PostComment from '../refactor/PostComments'

import { COMMENT_URL, POST_URL, DETAILS_URL } from "../constants/endpoints";

const Feed = (props) => {
  const [postsComment, setPostsComment] = useState([]);

  console.log(props.post_id)

  useEffect(() => {
    axiosAuth()
      .get(`${COMMENT_URL}/${props.post_id}/details`)
      .then((res) => {
        // console.log(res.data.posts.comments);
        setPostsComment(res.data.posts.comments);
      })
      .catch((err) => {
        console.log(`Get User Post Error`, err);
      });
  }, []);

  console.log(postsComment)

  return (
    <div className="feed-view-cta">
      <div className="main-cta-list">
        <h6 className="post_author_text"> {props.author} </h6>
        <p>
          {" "}
          {moment(props.created_at)
            .zone(+480)
            .format("MMM D YYYY, h:mm a")}{" "}
        </p>
        {/* <p>{props.title} </p> */}
        <p className="post_content_text">{props.content} </p>
      </div>
      <div className="post-comment-map">
        
        {/* <PostComment/> */}

        {postsComment.map((comments) => (
          <div>
             <CommentCard
              id={comments.id}
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
