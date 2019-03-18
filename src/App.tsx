import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './shared/organisms/Card/Card'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <Card />
          </p>
        </header>
      </div>
    );
  }
}

export default App;
