import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      <div>
        {movies.map((movie) => {
          return (
            <>
              <h3>{movie.title}</h3>
              <span>{movie.time}</span>
              <ul>
                {movie.genres.map((genre) => {
                  return <li key={genre}>genre</li>
                })}
              </ul>
            </>          
          )        
        })}
      </div>
    </div>
  )
}

export default Movies;
