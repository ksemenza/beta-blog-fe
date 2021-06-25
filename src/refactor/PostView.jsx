import moment from "moment";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { axiosAuth } from "../api/axiosAuth";

const PostView = (props) => {
  const userID = props.user_id;
  const [userfirst_name, setUserfirst_name] = useState("");
  const [userlast_name, setUserlast_name] = useState("");

  // Retrieving User's Full name for post view
  useEffect(() => {
    axiosAuth()
      .get(`/auth/${userID}`)
      .then((res) => {
        //  console.log(res.data)
        setUserfirst_name(res.data.first_name);
        setUserlast_name(res.data.last_name);
      })
      .catch((err) => {
        console.log(`Get User Name Error`, err);
      });
  }, []);

  return (
    <div className="post-view-cta">
      <h6 className="username-header">
        {" "}
        {userfirst_name} {userlast_name}{" "}
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
