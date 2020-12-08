import * as React from 'react'
import {Route, Switch, NavLink} from 'react-router-dom'
import Homepage from './components/Homepage'
import Login from './user/Login'
import PrivateRouter from './utils/PrivateRouter'
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <PrivateRouter path='/homepage' component={Homepage} exact/>
        <Route path  = '/' component={Login} exact/>
      </Switch>
      <NavLink to='/homepage'>Home</NavLink>

    </div>
  );
}

export default App;
