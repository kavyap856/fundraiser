import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);

    }
    logout() {
       
        localStorage.clear();
       
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <a className="navbar-brand" href="#"></a>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        {/* <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Sign In</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Sign Up</Link>
                        </li> */}
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <Link className="logout btn btn-outline-success my-2 my-sm-0" role="button" to="/" onClick={this.logout} > Logout</Link>

                    </form>
                </div>
            </nav>
        );
    }
}