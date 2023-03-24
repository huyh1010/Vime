import React from "react";
import { useNavigate } from "react-router-dom";
import "./TVCard.css";

function TVCard({ tv }) {
  const navigate = useNavigate();
  const base_url = "https://image.tmdb.org/t/p/original";

  return (
    <div className="tv-cards">
      <img
        key={tv?.id}
        className="tv-card"
        src={
          tv?.poster_path
            ? `${base_url}${tv?.poster_path}`
            : "http://www.movienewz.com/img/films/poster-holder.jpg"
        }
        alt="tv-card-poster"
        onClick={() => navigate(`/tv/${tv.id}`)}
      />
      <p className="tv-card-title">{tv?.name}</p>
    </div>
  );
}

export default TVCard;
