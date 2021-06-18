import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { axiosAuth } from "../api/axiosAuth";
import { connect } from "react-redux";
import { POST_URL } from "../constants/endpoints";
import Comment from "../comment/Comment";
import "../assets/css/main-page.css";
import Feed from "../user_feed/Feed";
import PostAdd from "../post/PostAdd";

// RETURNS ALL POST IN SYSTEM
const MainPage = (props) => {
  const [postList, setPostList] = useState([]);
    const user_id = localStorage.getItem("user_id");
    const [addPost, setAddPost] = useState(false);

              const handleClick = (e) => {
                setAddPost(!addPost);
              };




  useEffect(() => {
    axiosAuth()
      .get(`${POST_URL}`)

      .then((res) => {
        setPostList(res.data);
      })
      .catch((err) => {
        console.log(`Get User Post Error`, err);
      });
  }, []);
    

              return (
                <div className="post-view-cta">
                  {/* <button onClick={handleClick}>
                    {" "}
                    {!addPost ? "New Post" : "Cancel"}{" "}
                  </button> */}
                  {addPost ? (
                    <PostAdd toggleAddPost={handleClick} />
                  ) : (
                              <div>
                                  <PostAdd/>
                      {" "}
                      {postList.length > 0 ? (
                        <div className="post-list-cta">
                          {postList.map((posts) => (
                            <div>
                              <Feed
                                key={posts.id}
                                title={posts.title}
                                content={posts.content}
                                author={posts.author}
                                topic={posts.topic}
                                created_at={posts.created_at}
                              />
                              <NavLink
                                className="post-link"
                                to={`/post/${posts.id}/details`}
                              >
                                Comments
                              </NavLink>
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
