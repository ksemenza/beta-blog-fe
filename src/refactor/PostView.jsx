import moment from "moment";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { axiosAuth } from "../api/axiosAuth";

const PostView = (props) => {
  const userID = props.user_id;
  const [userFName, setUserFName] = useState("");
  const [userLName, setUserLName] = useState("");

  // Retrieving User's Full name for post view
  useEffect(() => {
    axiosAuth()
      .get(`/auth/${userID}`)
      .then((res) => {
        //  console.log(res.data)
        setUserFName(res.data.first_name);
        setUserLName(res.data.last_name);
      })
      .catch((err) => {
        console.log(`Get User Name Error`, err);
      });
  }, []);

  return (
    <div className="post-view-cta">
      <h6 className="username-header">
        {" "}
        {userFName} {userLName}{" "}
      </h6>
      <p> {props.author} </p>
      <p> {moment(props.created_at)} </p>
      <p> {props.content} </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(PostView);
