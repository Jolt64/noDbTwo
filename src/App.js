import React, { Component } from 'react';
import Landing from './components/Landing'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="appWrapper">
        <Landing/>
      </div>
    );
  }
}

export default App;
