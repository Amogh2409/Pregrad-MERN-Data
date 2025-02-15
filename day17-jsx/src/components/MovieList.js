import React from "react";
import MovieCard from "./MovieCard";
import movies from "./MoviesData";

const MovieList = () => {
    return(
        <div className="movie-list">
            {movies.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
}

export default MovieList;