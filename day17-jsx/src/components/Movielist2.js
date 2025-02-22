import React from 'react';

const MovieListDemo  = React.memo(({movies, onSelectMovie}) =>{
    console.log("Movie List Rendered");

    return (
        <ul>
            {movies.map((movie) => (
                <li key={movie.id} onClick={() => onSelectMovie(movie)}>
                    <strong>{movie.title}</strong> - Rating: {movie.rating}
                </li>
            ))}
        </ul>
    );
});

export default MovieListDemo;