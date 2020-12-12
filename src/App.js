import * as React from 'react'
import {Route, Switch, NavLink} from 'react-router-dom'
import { connect } from 'react-redux'
import Homepage from './components/Homepage'
import PostSingle from './post/PostSingle'
import CommentCard from './comment/CommentCard'
import Post from './post/Post'
import Comment from './comment/Comment'
import Login from './user/Login'
import PrivateRouter from './utils/PrivateRouter'
import './assets/css/app.css';
import Details from './components/Details'



function App(props) {
      const USER_ID = localStorage.getItem('user_id')

  return (
    <div className="App">
      <Route exact path = '/' component={Login} />
        <PrivateRouter exact path='/homepage' component={Homepage}/>
        <PrivateRouter exact path='/post' component={Post} exact/>
        <PrivateRouter exact path='/post' component={Post} exact/>
      <PrivateRouter exact path={`/auth/:id/details`} component={Details}/>
        <PrivateRouter exact path='/comment' component={PostSingle} exact/>
        <PrivateRouter exact path='/post/:id' component={Comment} exact/>
        <PrivateRouter exact path='/comment/:id' component={CommentCard} exact/>
      <NavLink to='/homepage'>Home</NavLink>

    </div>
  );
}

export default App
