import React, { Component } from 'react';
import logo from './logorond.png';
import './App.css';
import Nav from './component/Nav'
import Main from './component/Main'
import Footer from './component/Footer'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to 0seyphine_.</h2>
        </div>
        <div className="App-under-header">
          <div className="App-aside">
            <Nav />
          </div>
          <div className="App-body">
            <h3 className="App-intro">
              ← Have a look to my <code>selfish-app</code> by selecting section you're intrested in.
            </h3>
            <Main />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}