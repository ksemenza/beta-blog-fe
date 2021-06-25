import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";
import "../assets/css/home.css";
import HomePage from "./HomePage";

const MainPage = (props) => {
  let first_name = localStorage.getItem("first_name");
  let last_name = localStorage.getItem("last_name");
  let user_id = localStorage.getItem("userID");

  // console.log(first_name, last_name, user_id)

  console.log(props)

  return (
    <div className="home-cta">
      <div className="title-nav-wrap"></div>
      <div className="home-wrap">
        {/* <h4 className="home-header">Welcome {first_name}</h4> */}
        <HomePage
          first_name={first_name}
          last_name={last_name}
          user_id={user_id}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(MainPage);
