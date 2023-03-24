import React, { useState, useEffect } from "react";
import "./HomeBanner.css";
import apiService from "../app/apiService";
import requestMovies from "../app/RequestMoviesHomePage";

function HomeBanner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await apiService.get(requestMovies.fetchTrending);
        setMovie(
          res.data.results[Math.floor(Math.random() * res.data.results.length)]
        );
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovie();
  }, []);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n) + "..." : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        height: "50vh",
      }}
    >
      <div className="banner-contents">
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original}
        </h1>
        <button className="banner-button">Play</button>
        <p className="banner-description">{truncate(movie?.overview, 150)}</p>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}

export default HomeBanner;
