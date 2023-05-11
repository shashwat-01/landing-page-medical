import './App.css';
import React, { Component } from 'react'
import NavBar from './components/Nav'
import Home from './components/Home';
import Surgeries from './components/Surgeries'
import Description from './components/Description';
import Numbers from './components/Numbers';


export default class App extends Component {
  render() {
    return(
      <div className="App">
      <NavBar/>
      <Home/>
      <Surgeries/>
      <Description/>
      <Numbers/>
      <div><br/><br/></div>
    </div>
    )
  };
}
