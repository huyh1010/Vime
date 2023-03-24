import React from "react";
import { useNavigate } from "react-router-dom";
import "./MovieCard.css";

function MovieCard({ movie }) {
  const navigate = useNavigate();

  const base_url = "https://image.tmdb.org/t/p/original";

  return (
    <div className="movie-cards">
      <img
        key={movie?.id}
        className="movie-card"
        src={
          movie.poster_path
            ? `${base_url}${movie?.poster_path}`
            : "http://www.movienewz.com/img/films/poster-holder.jpg"
        }
        alt="movie-card-poster"
        onClick={() => navigate(`/movie/${movie.id}`)}
      />
      <p className="movie-card-title">{movie?.title}</p>
    </div>
  );
}

export default MovieCard;
