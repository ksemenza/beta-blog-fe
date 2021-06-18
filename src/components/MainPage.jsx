import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { axiosAuth } from "../api/axiosAuth";
import { connect } from "react-redux";
import { POST_URL } from "../constants/endpoints";
import Comment from "../comment/Comment";
import "../assets/css/main-page.css";
import Feed from "../user_feed/Feed";
import PostAdd from '../post/PostAdd'

// RETURNS ALL POST IN SYSTEM
const MainPage = () => {
                         const [postList, setPostList] = useState([]);
                         // condition rendering add post component
    const [addPost, setAddPost] = useState(false);
    
                         const fname = localStorage.getItem("fname");
                         const lname = localStorage.getItem("lname");

                         const handleClick = (e) => {
                           setAddPost(!addPost);
                         };

                         console.log(fname);

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
                             <button onClick={handleClick}>
                               {" "}
                               {!addPost ? "New Post" : "Cancel"}{" "}
                             </button>
                             {addPost ? (
                               <PostAdd toggleAddPost={handleClick} />
                             ) : (
                               <div>
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
                                           create_at={posts.created_at}
                                         />
                                         <NavLink
                                           className="post-link"
                                           to={`/post/${posts.id}/details`}
                                         >
                                           Comments
                                         </NavLink>
                                       </div>
                                       /**  
                      <div className="main-cta-list">
                            <h6 className="post_author_text"> {posts.author} </h6>
                            <p className="post_date_text"> {moment(posts.created_at).format("MMMM D YYYY, h:mm a")} </p>
                        <p >{posts.title} </p>
                        <p className="post_content_text">{posts.content} </p>
                        <NavLink className="post-link" to={`/post/${posts.id}/details`}>
                          Comments
                        </NavLink>
                            </div>
                            */
                                     ))}
                                   </div>
                                 ) : (
                                   <h5>
                                     Site under maintenance please check in
                                     later
                                   </h5>
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
