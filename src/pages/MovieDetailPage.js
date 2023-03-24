import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import apiService from "../app/apiService";
import MovieCastList from "../components/MovieCastList";
import "./MovieDetailPage.css";
import MovieDirector from "../components/MovieDirector";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import { GlobalContext } from "../context/GlobalContext";

function MovieDetailPage() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  // const youtubeUrl = "https://www.youtube.com/embed/";
  const base_url = "https://image.tmdb.org/t/p/original";
  const { addFavorite, favorite } = useContext(GlobalContext);

  let storeFavorite = favorite.find((fav) => fav.id === movie?.id);
  const favoriteDisabled = storeFavorite ? true : false;

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await apiService.get(
          `/movie/${id}?api_key=e1f8d9135767f496aea2eddea5fd8521&language=en-US&append_to_response=videos`
        );
        setMovie(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovie();
  }, [id]);

  return (
    <>
      {movie && (
        <>
          <div
            className="movie-banner"
            style={{
              backgroundImage: movie?.backdrop_path
                ? `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`
                : `url(http://www.movienewz.com/img/films/poster-holder.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          />
          <div className="movie-content-container">
            <img
              className="movie-image"
              src={
                movie.poster_path
                  ? `${base_url}${movie.poster_path}`
                  : "http://www.movienewz.com/img/films/poster-holder.jpg"
              }
              alt="movie-poster"
            />

            <div className="movie-content-info">
              <h1 className="movie-title">{movie?.title}</h1>
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                onClick={() => addFavorite(movie)}
                disabled={favoriteDisabled}
              >
                Favorite
              </Button>
              <div className="movie-sub-info">
                <p>{movie?.release_date.substring(0, 4)}</p>
                <p>|</p>
                <p>{`${movie?.runtime} minutes`}</p>
              </div>
              <div className="movie-genres">
                <p>Genre:</p>
                <p className="genre-chip">{movie?.genres[0].name} </p>
                {movie?.genres[1]?.name && (
                  <p className="genre-chip">{movie?.genres[1]?.name} </p>
                )}
                {movie?.genres[2]?.name && (
                  <p className="genre-chip">{movie?.genres[2]?.name}</p>
                )}
              </div>
              <div className="movie-crew-info">
                <p>Director:</p>
                <MovieDirector id={id} />
              </div>
              <div className="movie-description">{movie?.overview}</div>
            </div>
          </div>
          <MovieCastList id={id} />
          {/* <div className="movie-video-row">
            <h2>Medias</h2>
            <div className="movie-video-container">
              {movie?.videos?.results ? (
                movie?.videos?.results
                  ?.filter((video) => video.name.includes("Official"))
                  .map((video) => (
                    <iframe
                      className="movie-video"
                      title="movie"
                      src={`${youtubeUrl}${video.key}`}
                      maxWidth="500px"
                      height="300px"
                    />
                  ))
              ) : (
                <h2>(Not Available)</h2>
              )}
            </div>
          </div> */}
        </>
      )}
    </>
  );
}

export default MovieDetailPage;
