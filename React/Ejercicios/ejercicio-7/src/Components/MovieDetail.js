import React from 'react';
import {useEffect, useContext} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {GlobalContext} from '../Router';


export default function MovieDetail() {

    const {setMovie, movie} = useContext(GlobalContext);

    const {ID} = useParams();

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${ID}?api_key=9f71730a503f87329ec0e2ef43411e30`)
        .then(response => response.json())
        .then(data => console.log(data));
    }, [ID])


    return (
        <div>
            {movie.overview}
        </div>
    )
}
