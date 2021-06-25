import * as React from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import CommentCard from "./comment/CommentCard";
import Login from "./user/Login";
import PrivateRouter from "./utils/PrivateRouter";
import "./assets/css/app.css";
import Profile from "./components/Profile";
import Header from './components/Header'
import Footer from './components/Footer.jsx'
import Homepage from "./components/Homepage";
import PostCard from "./user_feed/PostCard";

function App(props) {
  const USER_ID = localStorage.getItem("user_id");

  return (
    <div className="App">
      <div><Header/></div>
      <div className='app-main-page'>
        <Route exact path="/" component={Login} />
        <PrivateRouter exact path="/homepage" component={Homepage} />
        <PrivateRouter exact path={`/auth/:id`} component={Profile} />
        <PrivateRouter exact path={`/post/:id`} component={PostCard} />
        <PrivateRouter
          exact
          path="/comment/:id"
          component={CommentCard}
          exact
        />
      </div>
      <div><Footer/></div>
    </div>
  );
}

export default App;
