import React from 'react';
import {useEffect, createContext, useState} from 'react';
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';
import Upcoming from "./Components/Upcoming";
import Header from './Components/Header';
import MovieDetail from './Components/MovieDetail';

export const GlobalContext = createContext();

export default function Router() {

    const [page, setPage] = useState(1);

    const [movie, setMovie] = useState({});

    const url_upComings = `https://api.themoviedb.org/3/movie/upcoming?api_key=9f71730a503f87329ec0e2ef43411e30&page=${page}`;

    const img_url = "https://image.tmdb.org/t/p/w500";

    const [upComings, setUpComings] = useState([]);

    useEffect(() => {
        fetch(url_upComings)
    .then(response => response.json())
    .then(data => setUpComings(data.results));
        }, [page]);

    
    return (
        <div>
            <BrowserRouter>
                <GlobalContext.Provider value={{setUpComings, upComings, img_url, setPage, page, setMovie, movie}}>
                        <Header />
                        <Switch>
                            <Route exact path="/" component={Upcoming}/>
                            <Route path={`/:ID`} component={MovieDetail}/>
                        </Switch>
                </GlobalContext.Provider>
                
            </BrowserRouter>
            
            
        </div>
    )
}
