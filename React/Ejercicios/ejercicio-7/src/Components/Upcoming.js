import React from 'react';
import {useContext} from 'react';
import {GlobalContext} from '../Router';
import {NavLink, useHistory} from 'react-router-dom';



export default function Upcoming() {

    const {upComings, img_url, setPage, page} = useContext(GlobalContext);

    let history = useHistory();

    function handleClick(e) {
        e.preventDefault();
        if(e.target.textContent === "Next" && page < 4) {
        setPage(currentPage => currentPage + 1)
        } else if (e.target.textContent === "Previous" && page > 1) {
            setPage(currentPage => currentPage - 1)
        } else if (e.target.textContent === 3){
            setPage(3)
        }
    }

    function movieId(movieId) {
        history.push(`/${movieId}`);
    }


    return (
        <div>
            <div>
                <a onClick={handleClick} href="#">Previous</a>
                <a onClick={handleClick} href="">{page + 1}</a>
                <a onClick={handleClick} href="">{page + 2}</a>
                <a onClick={handleClick} href="">{page + 3}</a>
                <a onClick={handleClick} href="#">Next</a>
            </div>
            <div className="movie">
                {upComings.map(upComing => {
                    return (<div className="upcoming">
                                <img src={`${img_url}${upComing.poster_path}`} alt=""/>
                                <h1>{upComing.title}</h1>
                                <div className="container">
                                    <p>{upComing.overview}</p>
                                </div>
                                <button onClick={() => movieId(upComing.id)}>More info</button>
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
