import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      <div>
        {actors.map((actor) => {
          return (
            <>
              <span>{actor.name}</span>
              <ul>
                {actor.movies.map((movie) => {
                  return <li key={movie}>{movie}</li>
                })}
              </ul>
            </>          
          )
        })}
      </div>
    </div>
  )
}

export default Actors;
