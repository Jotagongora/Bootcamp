import React from 'react'
import {useContext, useEffect} from 'react';

export default function Input() {

    const {url_search} = useContext(GlobalContext);

    useEffect(() => {
        fetch(url_search)
        .then(response => response.json())
        .then(data => console.log(data.results));
    }, [])

    return (
        <div>
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
    )
}
