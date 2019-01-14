import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
    render () {
        return (
            <div>
                <h>Login to Chess</h>
                <div>Username: <input type="text" /></div>
                <div>Password: <input type="password" /></div>
                <button>Login</button>
                <button><Link to="/">Return</Link></button>
            </div>
        );
    }
}

export default Login;