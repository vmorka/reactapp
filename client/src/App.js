import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello PANKO!</h1>
        <Login />
      </div>
    );
  }
}

export default App;
