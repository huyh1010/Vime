import React from "react";
import "./MovieGenreList.css";
import IconButton from "@mui/material/IconButton";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

function MovieGenreList({
  genres,
  selectedGenre,
  setInitialGenre,
  setSelectedGenre,
}) {
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

  const resetFilter = () => {
    setSelectedGenre([]);
    setInitialGenre(null);
  };

  return (
    <div className="movie-genre-list">
      <IconButton onClick={() => resetFilter()}>
        <HighlightOffIcon sx={{ color: "white" }} />
      </IconButton>
      {genres.map((genre, index) => (
        <p
          key={genre.id}
          id={genre.id}
          onClick={() => filterGenre(genre.id)}
          className={`movie-genre-chip ${
            selectedGenre.includes(genre.id) ? "selected" : ""
          }`}
        >
          {genre.name}
        </p>
      ))}
    </div>
  );
}

export default MovieGenreList;
