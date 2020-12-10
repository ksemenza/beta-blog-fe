import * as React from 'react'
import {Route, Switch, NavLink} from 'react-router-dom'
import { connect } from 'react-redux'
import Homepage from './components/Homepage'
import PostSingle from './components/PostSingle'
import Post from './components/Post'
import Login from './components/Login'
import PrivateRouter from './utils/PrivateRouter'
import './App.css';

function App(props) {
  return (
    <div className="App">
      <Route exact path = '/' component={Login} />
        <PrivateRouter exact path='/homepage' component={Homepage}/>
        <PrivateRouter exact path='/post' component={Post} exact/>
        <PrivateRouter exact path='/post/:id' component={PostSingle} exact/>
      <NavLink to='/homepage'>Home</NavLink>

    </div>
  );
}

export default App
