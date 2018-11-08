import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>Nebe Muzikos App</h1>
          <Router>
            <div>
              <Navbar />
                <div className="container">
                  <Route exact path="/" component={ Home } />
                  <Route exact path="/login" component={ Login } />
                </div>
            </div>
          </Router>
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
