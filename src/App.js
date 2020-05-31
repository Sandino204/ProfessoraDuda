import React from 'react';
import './App.css';
import Intro from './pages/intro'
import { BrowserRouter, Router, Route, NavLink, Switch, Redirect } from 'react-router-dom'
import Forms from './pages/Login'
import Profile from './pages/Profile'
import {DATA} from './database/db'

function App() {

  // function page(){
  //   setTimeout(function(){
  //     return()
  //   })
  // }
  
  const ProfileId = ({match}) => {
    return(
        <Profile data={DATA.filter((pers) => pers.id === parseInt(match.params.myId, 10))[0]} />
    )
}

  function Introb(){
    return(
      <div className="container-fluid blue all">
        <Intro></Intro>
      </div>
    )
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Introb}></Route>
        <Route exact path="/login" component={Forms}></Route>
        <Route path="/profile/:myId" component={ProfileId}></Route>
        {/* <Route path="/chat" component={Chat}></Route> */}
        <Redirect to="/"></Redirect>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
