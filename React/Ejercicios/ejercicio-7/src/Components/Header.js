import React from 'react';
import {useHistory} from 'react-router-dom';
import movies from '../Images/movies.png';

export default function Header() {

    let history = useHistory();

    function goHome() {
        history.push("/");
    }


    return (
        <div className="header d-flex">
            <img onClick={goHome} className="imgMovies" src={movies} alt="Home imagen"/>
        </div>
    )
}
