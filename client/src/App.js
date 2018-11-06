import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';
import Main from './components/Main'
import Navbar from './components/Navbar'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>Muzikos App</h1>
          <Router>
            <div>
              <Navbar />

              <Route path="/" component={ Main } exact />
              <Route path="/login" component={ Login } />
            </div>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
