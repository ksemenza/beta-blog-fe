import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import moment from "moment";
import { axiosAuth } from "../api/axiosAuth";
import CommentCard from '../comment/CommentCard'
import { NavLink } from "react-router-dom";
import {
  USER_URL,
  DETAILS_URL,
  COMMENT_URL,
  POST_URL,
} from "../constants/endpoints";

const Feed = (props) => {

    
    let commentList;
    const [postsComment, setPostsComment] = useState([]);

    


      useEffect(() => {
        axiosAuth()
          .get(`${POST_URL}/${props.id}${DETAILS_URL}`)

          .then((res) => {
            console.log(res.data);
              commentList = res.data.comments;
            setPostsComment(commentList);

          })
          .catch((err) => {
            console.log(`Get User Post Error`, err);
          });
      }, []);
    
    console.log(postsComment);
    console.log(props);

  return (
    <div className="feed-view-cta">
      <div className="main-cta-list">
        <h6 className="post_author_text"> {props.author} </h6>
        <p className="post_date_text">
          {" "}
          {moment(props.created_at).format("MMMM D YYYY, h:mm a")}{" "}
        </p>
        <p>{props.title} </p>
        <p className="post_content_text">{props.content} </p>
          </div>{" "}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(Feed);
