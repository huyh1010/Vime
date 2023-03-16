import React from "react";
import HomeScreen from "../pages/HomeScreen";
import MainLayout from "../layout/MainLayout";
import { Routes, Route } from "react-router-dom";
import MovieDetailPage from "../pages/MovieDetailPage";
import TVDetailPage from "../pages/TVDetailPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomeScreen />} />
        <Route path="/movie/:id" element={<MovieDetailPage />} />
        <Route path="/tv/:id" element={<TVDetailPage />} />
      </Route>
    </Routes>
  );
}

export default Router;
