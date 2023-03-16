import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import apiService from "../app/apiService";
import MovieCastList from "../components/MovieCastList";
import "./MovieDetailPage.css";
import MovieDirector from "../components/MovieDirector";
function MovieDetailPage() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  const youtubeUrl = "https://www.youtube.com/embed/";
  const base_url = "https://image.tmdb.org/t/p/original";

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
              backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          />
          <div className="movie-content-container">
            <img
              className="movie-image"
              src={`${base_url}${movie.poster_path}`}
              alt="movie-poster"
            />

            <div className="movie-content-info">
              <h1 className="movie-title">{movie?.title}</h1>
              <div className="movie-sub-info">
                <p>{movie?.release_date}</p>
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
          <div className="movie-video-row">
            <h2>Medias</h2>
            <div className="movie-video-container">
              {movie.videos.results &&
                movie.videos.results.map((video) => (
                  <iframe
                    className="movie-video"
                    title="movie"
                    src={`${youtubeUrl}${video.key}`}
                    width="453"
                    height="300px"
                  />
                ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default MovieDetailPage;

// {/* <h1 style={{ color: "white" }}>{movie?.id}</h1>
//     <h2 style={{ color: "white" }}>{movie?.original_title}</h2> */}

//     {/* <iframe
//       title="movie"
//       src={`${youtubeUrl}${movie?.videos.results[0].key}`}
//       width="853"
//       height="480"
//     /> */}
//     {/* <MovieCastList id={id} /> */}
