import React from "react";
import './Movie.css';

const MovieCard = ({ movie}) => {
    return(
        <div className="movie-card">
            <img src="{movie.posterUrl}" alt="{movie.title}" className="movie-poster" />
            <div className="movie-info">
                <h3 className="movie-title">{movie.title}</h3>
                <p className="movie-rating">Rating: {movie.rating}</p>
                <p className="movie-description">{movie.description}</p>
            </div>
        </div>
    );
}

export default MovieCard;