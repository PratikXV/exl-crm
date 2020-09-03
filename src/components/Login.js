import React, { Component } from "react";
import { Link } from 'react-router-dom';
import '../styles/Login.css'
export default class Login extends Component {
    render() {
        return (
            <form>
                <h3>Login</h3>

                <div className="form-group">
                    <label className="form-label">Username</label>
                    <input type="text"
                        className="form-control"
                        placeholder="Enter username"
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Password</label>
                    <input type="password"
                        className="form-control"
                        placeholder="Enter password"
                    />
                </div>
                <br/><br/>
                <button type="submit" className="btn btn-primary">
                    <Link to="/dash" style={{ textDecoration: 'none', color: "white" }}>Login</Link>
                </button>
            </form>
        );
    }
}
