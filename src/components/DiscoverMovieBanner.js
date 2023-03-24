import React from "react";

function DiscoverMovieBanner({ movies }) {
  const randomMovie = movies[Math.floor(Math.random() * movies.length)];
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n) + "..." : string;
  }

  return (
    <header
      style={{
        backgroundImage: randomMovie?.backdrop_path
          ? `url("https://image.tmdb.org/t/p/original/${randomMovie?.backdrop_path}")`
          : `url("http://www.movienewz.com/img/films/poster-holder.jpg")`,
        backgroundSize: "cover",
        height: "50vh",
        backgroundPosition: "top center",
        position: "relative",
        objectFit: "contain",
      }}
    >
      <div className="banner-contents">
        <h1 className="banner-title">
          {randomMovie?.title || randomMovie?.name || randomMovie?.original}
        </h1>
        <button className="banner-button">Play</button>
        <p className="banner-description">
          {truncate(randomMovie?.overview, 150)}
        </p>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}

export default DiscoverMovieBanner;
