import React from 'react'
import {useAuthContext} from '../contexts/AuthContext';

export default function Dashboard() {

    const {logOut} = useAuthContext();
    return (
        <div className="container">
            <h1>Private</h1>
            <button className="btn btn-danger" onClick={logOut}>Log out</button>
        </div>
    )
}
