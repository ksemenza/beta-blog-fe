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



function App(props) {
  return (
    <div className="App">
      <Route exact path = '/' component={Login} />
        <PrivateRouter exact path='/homepage' component={Homepage}/>
        <PrivateRouter exact path='/post' component={Post} exact/>
        <PrivateRouter exact path='/post/:id/details' component={Comment}/>
        <PrivateRouter exact path='/post/:id' component={PostSingle} exact/>
        <PrivateRouter exact path='/comment/:id' component={CommentCard} exact/>
      <NavLink to='/homepage'>Home</NavLink>

    </div>
  );
}

export default App
