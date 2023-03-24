import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import apiService from "../app/apiService";
import DiscoverTVBanner from "../components/DiscoverTVBanner";
import TVCard from "../components/TVCard";
import TVGenreList from "../components/TVGenreList";
import TVPagination from "../components/TVPagination";

function DiscoverTVPage() {
  const [tv, setTv] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(10);
  const [initialGenre, setInitialGenre] = useState(null);
  let [searchParams] = useSearchParams();
  const [selectedGenre, setSelectedGenre] = useState([]);
  const query = searchParams.get("search");
  const API_KEY = "e1f8d9135767f496aea2eddea5fd8521";

  const tvUrl = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc`;

  useEffect(() => {
    const getTV = async () => {
      try {
        const res = await apiService.get(
          query
            ? `/search/tv?api_key=${API_KEY}&language=en-US&page=${page}&query=${query}`
            : `${tvUrl}&page=${page}&with_genres=${initialGenre}`
        );
        setTv(res.data.results);
        setTotalPage(res.data.total_pages);
      } catch (error) {
        console.log(error);
      }
    };
    getTV();
  }, [page, query, tvUrl, initialGenre]);

  return (
    <>
      {tv && (
        <>
          <DiscoverTVBanner tv={tv} />
          <TVGenreList
            setInitialGenre={setInitialGenre}
            selectedGenre={selectedGenre}
            setSelectedGenre={setSelectedGenre}
          />
          <div className="tv-card-grid">
            {tv.map((tv) => (
              <TVCard tv={tv} />
            ))}
          </div>
          <TVPagination setPage={setPage} totalPage={totalPage} />
        </>
      )}
    </>
  );
}

export default DiscoverTVPage;
