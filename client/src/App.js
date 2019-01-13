import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Welcome to the Chess Game</p>
          <div>
            <button type="button">Register</button>
            <button type="button">Login</button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
