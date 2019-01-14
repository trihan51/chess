import React, { Component } from 'react';
import './App.css';
import Greeting from './components/Greeting';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <div>
              <Route path="/" exact component={ Greeting }/>
              <Route path="/login" exact component={ Login } />
              <Route path="/register" exact component={ Register } />
            </div>
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
