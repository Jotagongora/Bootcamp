import React from 'react';
import {useEffect, useContext} from 'react';
import {useParams} from 'react-router-dom';
import {GlobalContext} from '../Router';


export default function MovieDetail() {

    const imdbUrl = "https://www.imdb.com/title/"

    const {setMovie, movie, img_url} = useContext(GlobalContext);

    const {ID} = useParams();

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${ID}?api_key=9f71730a503f87329ec0e2ef43411e30`)
        .then(response => response.json())
        .then(data => setMovie(data));
    }, [ID])


    return (
        <div className="descriptionDetails bg-upcomings">
            <div>
                <h1>{movie.title}</h1>
                <img src={`${img_url}${movie.backdrop_path}`} alt="" className="imgDetails"/>
                <p>{movie.release_date}</p>
            </div>
            <div className="movieDetailsInfo">
                <div className="averageStyle"><p>{movie.vote_average}</p></div>
                <h2>{movie.tagline}</h2>
                <p>{movie.overview}</p>
                <button><a href={`${imdbUrl}${movie.imdb_id}`}>Imdb</a></button>
            </div>
        </div>
    )
}
