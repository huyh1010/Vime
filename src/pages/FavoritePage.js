import { Button } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import "./FavoritePage.css";

function FavoritePage() {
  const { favorite, removeFavorite } = useContext(GlobalContext);
  const base_url = "https://image.tmdb.org/t/p/original";

  const navigate = useNavigate();

  console.log(favorite);
  return (
    <>
      <img
        src="https://wallpaperaccess.com/full/2000105.jpg"
        alt="banner-poster"
        className="favorite-banner"
      />
      {favorite.length > 0 ? (
        <div className="favorite-grid">
          {favorite.map((movie) => (
            <div className="favorite-card">
              <img
                className="favorite-poster"
                src={
                  movie.poster_path
                    ? `${base_url}${movie.poster_path}`
                    : "http://www.movienewz.com/img/films/poster-holder.jpg"
                }
                alt="poster-path"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  navigate(`/${movie.seasons ? "tv" : "movie"}/${movie.id}`)
                }
              />
              <Button
                variant="contained"
                className="remove-button"
                onClick={() => removeFavorite(movie.id)}
              >
                Remove
              </Button>
            </div>
          ))}
        </div>
      ) : (
        <h1 style={{ color: "white", textAlign: "center" }}>
          No Movies or TV Shows in Your List{" "}
        </h1>
      )}
    </>
  );
}

export default FavoritePage;
