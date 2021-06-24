import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { axiosAuth } from "../api/axiosAuth";
import { POST_URL } from "../constants/endpoints";
import PostView from "./PostView";

const PostList = () => {
  const [postList, setPostList] = useState([]);
  const user_id = localStorage.getItem("user_id");

  useEffect(() => {
    axiosAuth()
      .get(`${POST_URL}`)
      .then((res) => {
        setPostList(res.data);
      })
      .catch((err) => {
        console.log("Post List Error", err);
      });
  }, []);

  return (
    <div className="post-view-cta">
      <h2></h2>
      {postList.map((posts) => (
        <div>
          <PostView
            key={posts.id}
            content={posts.content}
            author={posts.author}
            created_at={posts.created_at}
            user_id={user_id}
          />
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(PostList);
