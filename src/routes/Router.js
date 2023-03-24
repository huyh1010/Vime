import React from "react";
import HomeScreen from "../pages/HomeScreen";
import MainLayout from "../layout/MainLayout";
import { Routes, Route } from "react-router-dom";
import MovieDetailPage from "../pages/MovieDetailPage";
import TVDetailPage from "../pages/TVDetailPage";
import DiscoverMoviePage from "../pages/DiscoverMoviePage";
import DiscoverTVPage from "../pages/DiscoverTVPage";
import ErrorPage from "../pages/ErrorPage";
import FavoritePage from "../pages/FavoritePage";
import { GlobalProvider } from "../context/GlobalContext";

function Router() {
  return (
    <GlobalProvider>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomeScreen />} />
          <Route path="/movie/:id" element={<MovieDetailPage />} />
          <Route path="/tv/:id" element={<TVDetailPage />} />
          <Route path="*" element={<ErrorPage />}></Route>
        </Route>

        <Route path="/" element={<MainLayout />}>
          <Route path="/discover/movie" element={<DiscoverMoviePage />} />
        </Route>

        <Route path="/" element={<MainLayout />}>
          <Route path="/discover/tv" element={<DiscoverTVPage />} />
        </Route>

        <Route path="/" element={<MainLayout />}>
          <Route path="/favorite" element={<FavoritePage />} />
        </Route>
      </Routes>
    </GlobalProvider>
  );
}

export default Router;
