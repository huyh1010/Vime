import React, { useState, useEffect } from "react";
import apiService from "../app/apiService";
import "./TVGenreList.css";
import IconButton from "@mui/material/IconButton";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

function TVGenreList({ setInitialGenre, selectedGenre, setSelectedGenre }) {
  const [genres, setGenres] = useState([]);

  const filterGenre = (genreId) => {
    if (selectedGenre.includes(genreId)) {
      selectedGenre.forEach((id, index) => {
        if (id === genreId) {
          selectedGenre.splice(index, 1);
        }
      });
    } else {
      selectedGenre.push(genreId);
    }
    setSelectedGenre([...selectedGenre]);
    setInitialGenre(selectedGenre.join(","));
  };
  useEffect(() => {
    const getGenre = async () => {
      try {
        const res = await apiService(
          "/genre/tv/list?language=en-US&api_key=e1f8d9135767f496aea2eddea5fd8521"
        );
        setGenres(res.data.genres);
      } catch (error) {
        console.log(error);
      }
    };
    getGenre();
  }, []);

  const resetFilter = () => {
    setSelectedGenre([]);
    setInitialGenre(null);
  };

  return (
    <div className="tv-genre-list">
      <IconButton onClick={() => resetFilter()}>
        <HighlightOffIcon sx={{ color: "white" }} />
      </IconButton>
      {genres &&
        genres.map((genre) => (
          <p
            key={genre.id}
            id={genre.id}
            onClick={() => filterGenre(genre.id)}
            className={`tv-genre-chip ${
              selectedGenre.includes(genre.id) ? "selected" : ""
            }`}
          >
            {genre.name}
          </p>
        ))}
    </div>
  );
}

export default TVGenreList;
