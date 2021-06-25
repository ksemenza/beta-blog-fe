import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { axiosAuth } from "../api/axiosAuth";
import { connect } from "react-redux";
import { POST_URL, COMMENT_URL } from "../constants/endpoints";
import "../assets/css/main-page.css";
import Feed from "../user_feed/Feed";
import PostAdd from "../post/PostAdd";


// RETURNS ALL POST IN SYSTEM
const HomePage = (props) => {
  const [postList, setPostList] = useState([]);
  const [commentList, setCommentList] = useState([])
  const user_id = localStorage.getItem("user_id");
  const first_name = localStorage.getItem("first_name")
  const last_name = localStorage.getItem("last_name")

  console.log(props)

  useEffect(() => {
    axiosAuth()
      .get(`${POST_URL}`)
      .then((res) => {

      let  postLister = res.data
        console.log(postLister)
        setPostList(postLister);
      })
      .catch((err) => {
        console.log(`Get User Post Error`, err);
      });
  }, []);

  useEffect(() => {
    axiosAuth()
      .get(`${COMMENT_URL}/${postList.id}/details`)
      .then((res) => {
        let commentLister = res.data.posts.comments
        console.log(commentLister)
        setCommentList(commentLister)
    } )
  }, [])

  return (
    <div className="post-view-cta">
        <div>
          <PostAdd />{" "}
          {postList.length > 0 ? (
            <div className="post-list-cta">
              {postList.map((posts) => (
                <div>
                  <Feed
                    post_id={posts.id}
                    author={posts.author}
                    content={posts.content}
                    created_at={posts.created_at}
                    user_id={user_id}
                    first_name={first_name}
                    last_name={last_name}
                  />
                </div>
              ))}
            </div>
          ) : (
            <h5>Site under maintenance please check in later</h5>
          )}
        </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(HomePage);
