import React from "react";

function DiscoverTVBanner({ tv }) {
  const randomShows = tv[Math.floor(Math.random() * tv.length)];
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n) + "..." : string;
  }
  return (
    <header
      style={{
        backgroundImage: randomShows?.backdrop_path
          ? `url("https://image.tmdb.org/t/p/original/${randomShows?.backdrop_path}")`
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
          {randomShows?.title || randomShows?.name || randomShows?.original}
        </h1>
        <button className="banner-button">Play</button>
        <p className="banner-description">
          {truncate(randomShows?.overview, 150)}
        </p>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}

export default DiscoverTVBanner;
