import React from 'react';
import './App.css';
import Intro from './pages/intro'
import { BrowserRouter, Router, Route, NavLink, Switch, Redirect } from 'react-router-dom'
import Forms from './pages/Login'
import Profile from './pages/Profile'
import {DATA} from './database/db'
import Price1 from './pages/price1'
import Price2 from './pages/price2'
import Price3 from './pages/price3'
import Price4 from './pages/price4'
import Price5 from './pages/price5'

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
        <Route path="/price1" component={Price1}></Route>
        <Route path="/price2" component={Price2}></Route>
        <Route path="/price3" component={Price3}></Route>
        <Route path="/price4" component={Price4}></Route>
        <Route path="/price5" component={Price5}></Route>
        {/* <Route path="/chat" component={Chat}></Route> */}
        <Redirect to="/"></Redirect>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
