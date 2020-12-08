import * as React from 'react'
import {Route, Switch, NavLink} from 'react-router-dom'
import Homepage from './components/Homepage'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './components/Login'
import Register from './components/Register'
import PrivateRouter from './utils/privateRouter'
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <PrivateRouter path='/homepage' component={Homepage} exact/>
        <Route path exact = '/' component={Login}/>
      </Switch>
      <NavLink to='/homepage'>Home</NavLink>

    </div>
  );
}

export default App;
