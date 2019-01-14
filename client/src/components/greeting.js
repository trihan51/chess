import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Greeting extends Component {
    render () {
        return (
            <div>
                <p>Welcome to the Chess Game</p>
                <button><Link to="/register">Register</Link></button>
                <button><Link to="/login">Login</Link></button>
            </div>
        );
    }
}

export default Greeting;