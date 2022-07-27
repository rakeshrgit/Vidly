import React, { Component } from 'react';
import { Outlet, Link, NavLink  } from "react-router-dom";
class Navbar extends Component {
    state = {  } 
    render() { 
        return (
            <div className="pt-5">
                <div className="container">
                    <div className="menu-nav">   
                        <ul className="d-flex list-unstyled mb-0"> 
                            <li className="me-2"><NavLink to="/">Home</NavLink></li>
                            <li className="me-2"><NavLink to="/products">Products</NavLink></li>
                            <li className="me-2"><NavLink to="/dashboard">Dashboard</NavLink></li>
                            <li className="me-2"><NavLink to="/posts">Posts</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Navbar;