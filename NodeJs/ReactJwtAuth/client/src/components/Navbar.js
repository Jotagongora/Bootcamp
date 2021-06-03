import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand navbar-light bg-light">
                <ul className="navbar-nav">
                    <li className="navbar-item">
                    <NavLink to="/login" className="nav-link">Login</NavLink>              
                    </li>
                    <li className="navbar-item">
                    <NavLink to="/Public" className="nav-link">Public</NavLink>              
                    </li>
                    <li className="navbar-item">
                    <NavLink to="/Dashboard" className="nav-link">Dashboard</NavLink>              
                    </li>
                    <li className="navbar-item">
                    <NavLink to="/Error" className="nav-link"></NavLink>              
                    </li>
                </ul>
            </nav>
        </div>
    )
}
