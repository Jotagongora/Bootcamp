import React from 'react';
import {useEffect} from 'react';

export default function MovieDetail() {

    const url_detail = `https://api.themoviedb.org/3/movie/${id}?api_key=9f71730a503f87329ec0e2ef43411e30`;

    useEffect(() => {
        fetch(url_detail)
        .then(response => response.json())
        .then(data => data)
    }, [id])

    return (
        <div>
            
        </div>
    )
}
