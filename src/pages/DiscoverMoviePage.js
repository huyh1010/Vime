import React, { useState, useEffect } from "react";
import apiService from "../app/apiService";
import DiscoverMovieBanner from "../components/DiscoverMovieBanner";
import MovieGenreList from "../components/MovieGenreList";
import MovieCard from "../components/MovieCard";
import "../components/MovieCard.css";

import MoviePagination from "../components/MoviePagination";
import { useSearchParams } from "react-router-dom";

function DiscoverMoviePage() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);
  const [initialGenre, setInitialGenre] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState([]);
  let [searchParams] = useSearchParams();
  const query = searchParams.get("search");
  const API_KEY = "e1f8d9135767f496aea2eddea5fd8521";

  const movieUrl = `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&`;

  const genres = [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 35,
      name: "Comedy",
    },
    {
      id: 80,
      name: "Crime",
    },
    {
      id: 99,
      name: "Documentary",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 10751,
      name: "Family",
    },
    {
      id: 14,
      name: "Fantasy",
    },
    {
      id: 36,
      name: "History",
    },
    {
      id: 27,
      name: "Horror",
    },
    {
      id: 10402,
      name: "Music",
    },
    {
      id: 9648,
      name: "Mystery",
    },
    {
      id: 10749,
      name: "Romance",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
    {
      id: 10770,
      name: "TV Movie",
    },
    {
      id: 53,
      name: "Thriller",
    },
    {
      id: 10752,
      name: "War",
    },
    {
      id: 37,
      name: "Western",
    },
  ];

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await apiService.get(
          query
            ? `/search/movie?api_key=${API_KEY}&language=en-US&page=${page}&query=${query}`
            : `${movieUrl}page=${page}&with_genres=${initialGenre}`
        );
        setMovies(res.data.results);
        setTotalPages(res?.data?.total_pages);
      } catch (error) {
        console.log("error", error);
      }
    };
    getMovie();
  }, [page, initialGenre, query, movieUrl]);

  return (
    <>
      {movies && (
        <>
          <DiscoverMovieBanner movies={movies} />
          <MovieGenreList
            genres={genres}
            selectedGenre={selectedGenre}
            setInitialGenre={setInitialGenre}
            movies={movies}
            setSelectedGenre={setSelectedGenre}
          />
          <div className="movie-card-grid">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
          <MoviePagination setPage={setPage} pageNumber={totalPages} />
        </>
      )}
    </>
  );
}

export default DiscoverMoviePage;
