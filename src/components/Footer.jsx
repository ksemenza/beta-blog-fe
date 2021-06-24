import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../assets/css/footer.css";

const Footer = (props) => {
  return (
    <div className="footer-cta">
      <div className="footer-nav">
        <nav className="footer-nav-tag">
          <Link className="footer-link-nav" to="/homepage">
            Home
          </Link>
          <Link className="footer-link-nav" to="/post">
            Post
          </Link>
          <Link className="footer-link-nav" to="/comment">
            Comment
          </Link>
          <Link className="footer-link-nav" to="/notifications">
            Notification
          </Link>
        </nav>
      </div>

      <p>Nogging Blogging</p>
      <p>Guin Tech Productions © 2021</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(Footer);
