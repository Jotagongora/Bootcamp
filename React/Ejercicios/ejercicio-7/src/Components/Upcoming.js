import React from 'react';
import {useContext} from 'react';
import {GlobalContext} from '../Router';
import {useHistory} from 'react-router-dom';



export default function Upcoming() {

    const {upComings, img_url, setPage, page} = useContext(GlobalContext);

    let history = useHistory();

    function handleClick(e) {
        e.preventDefault();
        if(e.target.textContent === "First") {
        setPage(1);
        } else if (e.target.textContent === "Last") {
            setPage(9)
        } else if (e.target.textContent != "First" && e.target.textContent != "Last" && e.target.textContent != "Previous" && e.target.textContent != "Next"){
            setPage(Number(e.target.textContent));
        } else if (e.target.textContent === "Previous" && page > 1) {
            setPage(currentPage => currentPage - 1)
        } else if (e.target.textContent === "Next" && page < 9) {
            setPage(currentPage => currentPage + 1)
        }
    }

    function movieId(movieId) {
        history.push(`/${movieId}`);
    }


    return (
        <div className="bg-upcomings">
            <label htmlFor="search">Search :</label>
            <input placeholder="write here..." className="searchInput" id="search" type="text"/>
            <div className="styleLinks">
                <a onClick={handleClick} href="#">First</a>
                <a onClick={handleClick} href="#">Previous</a>
                <a onClick={handleClick} href="">{page > 2 && page - 2}</a>
                <a onClick={handleClick} href="">{page > 1 && page - 1}</a>
                <a className="activePage" onClick={handleClick} href="">{page}</a>
                <a onClick={handleClick} href="">{page < 9 && page + 1}</a>
                <a onClick={handleClick} href="">{page < 8 && page + 2}</a>
                <a onClick={handleClick} href="#">Next</a>
                <a onClick={handleClick} href="#">Last</a>
            </div>
            <div className="movie">
                {upComings.map(upComing => {
                    return (<div className="upcoming">
                                <img src={`${img_url}${upComing.poster_path}`} alt=""/>
                                <h1>{upComing.title}</h1>
                                <div className="container">
                                    <p>{upComing.overview}</p>
                                </div>
                                <button className="btn btn-moreinfo" onClick={() => movieId(upComing.id)}>More info</button>
                            </div>
                        
                )})}
            </div>
            <div className="styleLinks">
                <a onClick={handleClick} href="#">First</a>
                <a onClick={handleClick} href="#">Previous</a>
                <a onClick={handleClick} href="">{page > 2 && page - 2}</a>
                <a onClick={handleClick} href="">{page > 1 && page - 1}</a>
                <a className="activePage" onClick={handleClick} href="">{page}</a>
                <a onClick={handleClick} href="">{page < 9 && page + 1}</a>
                <a onClick={handleClick} href="">{page < 8 && page + 2}</a>
                <a onClick={handleClick} href="#">Next</a>
                <a onClick={handleClick} href="#">Last</a>
            </div>
        </div>
    )
}
