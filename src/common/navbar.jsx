import React, { Component } from 'react';
import { Outlet, Link, NavLink  } from "react-router-dom";
class Navbar extends Component {
    state = {  } 
    render() { 
        return (
            <div className="mb-4">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Vidly</a>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className="menu-nav">   
                                <ul className="d-flex list-unstyled mb-0"> 
                                    <li className="me-3"><NavLink to="/">Home</NavLink></li>
                                    <li className="me-3"><NavLink to="/products">Products</NavLink></li>
                                    <li className="me-3"><NavLink to="/movies">Movies</NavLink></li>
                                    <li className="me-3"><NavLink to="/posts">Posts</NavLink></li>
                                    <li className="me-3"><NavLink to="/login">Login</NavLink></li>
                                    <li className="me-3"><NavLink to="/register">Register</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}
 
export default Navbar;