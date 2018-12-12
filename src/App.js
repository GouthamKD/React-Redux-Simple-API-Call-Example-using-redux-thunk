import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';

import store from './store';
import Posts from './components/Post';
import Postform from './components/Postform';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React Redux tutorials!!</h1>
          </header>

          <Postform />

          <hr />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
