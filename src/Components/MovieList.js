import React from 'react';
import MovieCard from "./MovieCard";
import "./Style.css";

const MovieList =(props)=>{
        return (
          <div className="MovieList">
          {props.Movies.map((movie,i) => {
            return (
              <MovieCard
                title={movie.title}
                imageUrl={movie.posterUrl}
                description={movie.description}
                rate={movie.rate}
                id={movie.id}
              key={i} />
              
            );
          })}
          </div>
        )
}

export default MovieList;