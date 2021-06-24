import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { axiosAuth } from "../api/axiosAuth";
import { connect } from "react-redux";
import { POST_URL } from "../constants/endpoints";
import "../assets/css/main-page.css";
import Feed from "../user_feed/Feed";
import PostAdd from "../post/PostAdd";
import Comment from "../comment/Comment";


// RETURNS ALL POST IN SYSTEM
const MainPage = (props) => {
  const [postList, setPostList] = useState([]);
  const [postID, setPostID] = useState([])
  const user_id = localStorage.getItem("user_id");
  const [addPost, setAddPost] = useState(false);

  
        let postLister;

  const handleClick = (e) => {
    setAddPost(!addPost);
  };

  useEffect(() => {
    axiosAuth()
      .get(`${POST_URL}`)
      .then((res) => {

        postLister = res.data
        console.log(postLister)
        setPostList(postLister);
      })
      .catch((err) => {
        console.log(`Get User Post Error`, err);
      });
  }, []);

  let newPostList = [...postList]
  let PostIds = { ...newPostList }

  console.log(postLister)
  console.log(postID)

  return (
    <div className="post-view-cta">
      {addPost ? (
        <PostAdd toggleAddPost={handleClick} />
      ) : (
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
                  />
                  <NavLink
                    className="post-link"
                    to={`/comment/${posts.id}/details`}
                  ></NavLink>
                </div>
              ))}
            </div>
          ) : (
            <h5>Site under maintenance please check in later</h5>
          )}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(MainPage);
