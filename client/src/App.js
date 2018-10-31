import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Categories from'./components/Categories';

import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Navbar />
          <h1>Muzikos App</h1>
          <Login />
          <Categories />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
