import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { axiosAuth } from "../api/axiosAuth";
import PostAdd from "./PostAdd";
import { NavLink } from "react-router-dom";
import { USER_URL, DETAILS_URL, POST_URL } from "../constants/endpoints";
import "../assets/css/post.css";
import PostCard from "./PostCard";
import { USER_ID, F_NAME } from "../constants/local_storage";

const Post = (props) => {
  // user's post from api return
  const [userPosts, setUserPosts] = useState([]);

  // condition rendering add post component
  const [addPost, setAddPost] = useState(false);

  // variable assigned to userPosts' array
  let postList;

  const handleClick = (e) => {
    setAddPost(!addPost);
  };

  useEffect(() => {
    axiosAuth()
      .get(`${USER_URL}/${USER_ID}${DETAILS_URL}`)

      .then((res) => {
        postList = res.data.posts;
        setUserPosts(postList);
        console.log(userPosts);
      })
      .catch((err) => {
        console.log(`Get User Post Error`, err);
      });
  }, [USER_ID]);

  return (
    <div className="post-cta">
      <button onClick={handleClick}>
        {" "}
        {!addPost ? "New Post" : "Cancel"}{" "}
      </button>
      {addPost ? (
        <PostAdd toggleAddPost={handleClick} />
      ) : (
        <div>
          <h4> {F_NAME}'s Posts</h4>
          <div className="post-list-cta">
            {userPosts.length > 0 ? (
              <div className="post-list-wrap">
                <div>
                  {userPosts.map((post, key) => (
                    <div>
                      <PostCard
                        toggleEditPost={handleClick}
                        key={post.id}
                        created_at={post.created_at}
                        title={post.title}
                        content={post.content}
                        author={post.author}
                        topic={post.topic}
                      />

                      <div className="post-comment-wrap">
                        <NavLink
                          className="post-link"
                          key={USER_ID}
                          to={`/post/${post.id}`}
                        >
                          View Post
                        </NavLink>

                        <NavLink
                          className="post-link"
                          key={post.id}
                          to={`/post/${post.id}/details`}
                        >
                          Comment
                        </NavLink>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <h5>No Posts Available</h5>
            )}{" "}
          </div>
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
export default connect(mapStateToProps)(Post);
