import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { axiosAuth } from "../api/axiosAuth";
import { connect } from "react-redux";
import { logoutUser } from "../user/user-action";

const Profile = (props) => {
  const USER_ID = localStorage.getItem("user_id");
  const [profile, setProfile] = useState({});



  useEffect(() => {
    axiosAuth()
      .get(`/auth/${USER_ID}`)

      .then((res) => {
        //  console.log(res.data)
        setProfile(res.data);
      })
      .catch((err) => {
        console.log(`Get User Post Error`, err);
      });
  }, []);

  console.log(props);

  return (
    <div className="profile-view-cta">
      <Link to="/">
        <button className="header-btn-logout" onClick={props.logoutUser}>
          Log Out
        </button>
      </Link>
      <h2>Profile</h2>
      <p>First Name: {profile.first_name}</p>
      <p>Last Name: {profile.last_name}</p>
      <p>Email: {profile.email}</p>
      <p>Username: {profile.username}</p>
      <p>Password: {profile.password}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps, {logoutUser})(Profile);
