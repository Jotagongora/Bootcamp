import React from 'react';
import {useContext} from 'react';
import {GlobalContext} from '../Router';
import {NavLink, useHistory} from 'react-router-dom';



export default function Upcoming() {

    const {upComings, img_url, setPage, page, setId} = useContext(GlobalContext);

    let history = useHistory();

    function handleClick(e) {
        e.preventDefault();
        if(e.target.textContent === "Next" && page < 4) {
        setPage(currentPage => currentPage + 1)
        } else if (e.target.textContent === "Previous" && page > 1) {
            setPage(currentPage => currentPage - 1)
        }
    }



    return (
        <div>
            <div>
                <a onClick={handleClick} href="#">Previous</a>
                <a onClick={handleClick} href="#">Next</a>
            </div>
            <div className="movie">
                {upComings.map(upComing => {
                    return (<div className="upcoming">
                            <img src={`${img_url}${upComing.poster_path}`} alt=""/>
                            <h1>{upComing.title}</h1>
                            <NavLink to={`/${upComing.id}`}>More info</NavLink>
                            </div>
                        
                )})}
            </div>
            <div>
                <a onClick={handleClick} href="#">Previous</a>
                <a onClick={handleClick} href="#">Next</a>
            </div>
        </div>
    )
}
