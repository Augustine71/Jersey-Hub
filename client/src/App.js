import React, { Component } from "react";

import "./App.css";
import pele from "./images/pele.png";
import closebot from "./images/closebot.png";
import main from "./images/main.png"
import arrow from "./images/arrow.png";
import logo from "./images/logo.png";
import logowording from "./images/logowording.png"

import Chat from "./components/Chat";

class App extends Component{
  constructor(props) {
      super(props);
      this.state={
        visible: false
      }
  };
  render(){
  return (
    <div>
    <div className="navbar">
    <div className="logo">
      <img src={logo} alt="logo"/>
    </div>
    <div className="line">
    <img src={logowording} alt="logowording"/>
    </div>
    </div>
    <div className="navbar2"></div>
    <div className="tagline">
     ALL YOUR <span>FAVS</span> UNDER ONE HUB
    </div>
    <div className="tagline1">Order yours now with Pele</div>
    <div className="main">
      <img src={main} alt="main"/>
    </div>
    <div className="arrow">
      <img src={arrow} alt="arrow"/>
    </div>
      <div className="container">
        {this.state.visible ? <Chat/> : null}
    </div>
    <div>
      {this.state.visible ?
      <div className="closebot"> <img src={closebot} alt="close-button"   onClick={()=>{this.setState({visible:false});}} /></div> :
     <div className="bott"> <img src={pele} alt="bot"  onClick={()=>{this.setState({visible:true});}} /></div>}
    </div>
    <div className="footer"></div>
      </div>
  );
}
}

export default App;
