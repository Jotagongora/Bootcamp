import React from 'react';
import {useContext} from 'react';
import {GlobalContext} from '../Router';



export default function Upcoming() {

    const {upComings, img_url, setPage, page, setId} = useContext(GlobalContext);

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
                            <button className="mb-3">More info</button>
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
