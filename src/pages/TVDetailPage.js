import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import apiService from "../app/apiService";
import TVCastList from "../components/TVCastList";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import "./TVDetailPage.css";
import { GlobalContext } from "../context/GlobalContext";

function TVDetailPage() {
  const [tv, setTv] = useState([]);
  const { id } = useParams();
  // const youtubeUrl = "https://www.youtube.com/embed/";
  const base_url = "https://image.tmdb.org/t/p/original";
  const { addFavorite, favorite } = useContext(GlobalContext);

  let storeFavorite = favorite.find((fav) => fav.id === tv?.id);
  const favoriteDisabled = storeFavorite ? true : false;

  useEffect(() => {
    const fetchTV = async () => {
      try {
        const res = await apiService.get(
          `/tv/${id}?api_key=e1f8d9135767f496aea2eddea5fd8521&language=en-US&append_to_response=videos`
        );
        setTv(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTV();
  }, [id]);

  return (
    <>
      {tv && (
        <>
          <div
            className="tv-banner"
            style={{
              backgroundImage: tv?.backdrop_path
                ? `url("https://image.tmdb.org/t/p/original/${tv?.backdrop_path}")`
                : `url(http://www.movienewz.com/img/films/poster-holder.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          />
          <div className="tv-content-container">
            <img
              className="tv-image"
              src={
                tv.poster_path
                  ? `${base_url}${tv.poster_path}`
                  : "http://www.movienewz.com/img/films/poster-holder.jpg"
              }
              alt="tv-poster"
            />

            <div className="tv-content-info">
              <h1 className="tv-title">{tv?.name}</h1>
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                onClick={() => addFavorite(tv)}
                disabled={favoriteDisabled}
              >
                Favorite
              </Button>
              <div className="tv-sub-info">
                <p>{tv?.first_air_date?.substring(0, 4)}</p>
                <p>|</p>

                {tv.seasons &&
                  tv.seasons
                    .slice(0, 5)
                    .map((season) => (
                      <p className="tv-seasons">{season.name}</p>
                    ))}
              </div>
              <div className="tv-genres">
                <p>Genre:</p>
                {tv.genres &&
                  tv.genres.map((genre) => (
                    <p className="genre-chip">{genre.name}</p>
                  ))}
              </div>
              <div className="tv-crew-info">
                <p>Director:</p>
                {tv.created_by && tv.created_by.length ? (
                  tv.created_by
                    .slice(0, 2)
                    .map((creator) => (
                      <p className="director-chip">{creator.name}</p>
                    ))
                ) : (
                  <p className="director-chip">Unknown</p>
                )}
              </div>
              <div className="tv-description">{tv?.overview}</div>
            </div>
          </div>
          <TVCastList id={id} />
          {/* <div className="tv-video-row">
            <h2>Medias</h2>
            <div className="tv-video-container">
              {tv?.videos?.results && tv?.videos?.results?.length ? (
                tv?.videos?.results
                  ?.filter((video) => video.type.includes("Trailer"))
                  .map((video) => (
                    <iframe
                      className="tv-video"
                      title="tv"
                      src={`${youtubeUrl}${video.key}`}
                      width="453"
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

export default TVDetailPage;
