import React, { useState } from "react";
import { useEffect } from "react";

import MovieCard from "./MovieCard"
import "./App.css";
import Search_Icon from "./search.svg";

// API Key = 2bd44a3e
// Url = http://www.omdbapi.com/?apikey=[yourkey]&
// Url = http://img.omdbapi.com/?apikey=[yourkey]&

const API_Url = 'http://www.omdbapi.com/?apikey=2bd44a3e'

const movie1 ={
    "Title": "Sing",
    "Year": "2016",
    "imdbID": "tt3470600",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTYzODYzODU2Ml5BMl5BanBnXkFtZTgwNTc1MTA2NzE@._V1_SX300.jpg"
}

const App = () => {

    const [Movie,setMovie] = useState([]);
    const [SearchQuery,setSearchQuery] = useState('');

    const Search_Movie = async (title) => {
        const Response = await fetch(`${API_Url}&s=${title}`);
        const Data = await Response.json();

        setMovie(Data.Search);
    }

    useEffect(() => {
        Search_Movie('Encanto');
    }, [])

    return (
        <div className="app">
            <h1>Movies</h1>

            <div className="search">
                <input 
                placeholder="Search here"
                value={SearchQuery}
                onChange={(e)=>setSearchQuery(e.target.value)}
                />
                <img src ={Search_Icon} 
                alt = "Sreach" 
                onClick={()=>Search_Movie(SearchQuery)}
                />
            </div>
            {
                Movie?.length > 0
                ?
                (
                    <div className="container">
                        {Movie.map((movie)=>(
                                <MovieCard movie1={movie}/>
                        )
                        )}
                    </div>
                ):
                (
                    <div className="empty">
                        <h2>No Movies Found</h2>
                    </div>
                )
            }
            
        </div>
    );
}

export default App;