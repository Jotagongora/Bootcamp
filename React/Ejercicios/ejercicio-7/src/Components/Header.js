import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Header() {
    return (
        <div className="header">
            <NavLink to="/">Home</NavLink>
            <h1>Film Premieres</h1>
        </div>
    )
}
