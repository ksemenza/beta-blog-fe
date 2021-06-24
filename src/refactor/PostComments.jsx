import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import axiosAuth from "../api/axiosAuth";
import { COMMENT_URL, DETAILS_URL } from "../constants/endpoints";



const PostComments = (props) => {

    const [postComments, setPostComments] = useState([])

    console.log(props)


    useEffect(() => {
        axiosAuth()
          .get(`${COMMENT_URL}/${props.post_id}/${DETAILS_URL}`)
          .then((res) => {
              console.log(res.data);
              setPostComments(res.data)
          })
          .catch((err) => {
            console.log(`Get User Post Error`, err);
          });
    }, [])

    console.log(postComments)

  return (
    <div className="post-view-cta">
      <h2></h2>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(PostComments);
