import React from "react";
import { connect } from "react-redux";

const Blank = () => {
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

export default connect(mapStateToProps)(Blank);
