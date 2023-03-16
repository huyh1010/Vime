import React from "react";
import MovieRow from "../components/MovieRow";
import TVRow from "../components/TVRow";
import requestMovies from "../app/RequestMoviesHomePage";
import requestTV from "../app/RequestTVHomePage";
import "./HomeScreen.css";
import HomeBanner from "../components/HomeBanner";

function HomeScreen() {
  return (
    <>
      <HomeBanner />
      <div className="movie-rows">
        <MovieRow
          title="Trending Movies"
          fetchUrl={requestMovies.fetchTrending}
          isLargeRow
        />
        <MovieRow
          title="Upcoming Movies"
          fetchUrl={requestMovies.fetchUpcoming}
        />
        <MovieRow
          title="Popular Movies"
          fetchUrl={requestMovies.fetchPopular}
        />

        <MovieRow
          title="Top-Rated Movies"
          fetchUrl={requestMovies.fetchTopRated}
        />
        <TVRow
          title="Trending Shows"
          fetchUrl={requestTV.fetchTrending}
          isLargeRow
        />
        <TVRow title="Now Playing Shows" fetchUrl={requestTV.fetchOnAir} />
        <TVRow title="Popular Shows" fetchUrl={requestTV.fetchPopular} />
        <TVRow title="Top-Rated Shows" fetchUrl={requestTV.fetchTopRated} />
      </div>
    </>
  );
}

export default HomeScreen;
