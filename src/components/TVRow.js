import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import apiService from "../app/apiService";

function TVRow({ title, fetchUrl, isLargeRow = false }) {
  const [tvShows, setTvShows] = useState([]);
  const navigate = useNavigate();
  const base_url = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await apiService.get(fetchUrl);
        setTvShows(res.data.results);
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
        {tvShows?.map((tv) => (
          <img
            onClick={() => navigate(`/tv/${tv.id}`)}
            key={tv.id}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_url}${isLargeRow ? tv.poster_path : tv.backdrop_path}`}
            alt={tv.title}
          />
        ))}
      </div>
    </div>
  );
}

export default TVRow;
