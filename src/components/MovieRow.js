import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import apiService from "../app/apiService";

function MovieRow({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const base_url = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await apiService.get(fetchUrl);
        setMovies(res.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, [fetchUrl]);

  return (
    <div className="movie-row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies?.map((movie) => (
          <img
            onClick={() => navigate(`/movie/${movie.id}`)}
            key={movie.id}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.title}
          />
        ))}
      </div>
    </div>
  );
}

export default MovieRow;
