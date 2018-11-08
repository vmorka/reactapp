import React, { Component } from 'react';
import './App.css';
import Login from './components/LoginComponent';
import Select from './components/SelectComponent'
import Navbar from './components/NavbarComponent'
import Footer from './components/FooterComponent'

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
                  <Route exact path="/" component={ Select } />
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
