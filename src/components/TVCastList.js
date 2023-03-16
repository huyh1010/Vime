import React, { useState, useEffect } from "react";
import apiService from "../app/apiService";
import "./TVCastList.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function TVCastList({ id }) {
  const [casts, setCasts] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    const getCast = async () => {
      try {
        const res = await apiService.get(
          `/tv/${id}/credits?api_key=e1f8d9135767f496aea2eddea5fd8521&language=en-US`
        );
        setCasts(res.data.cast);
      } catch (error) {}
    };
    getCast();
  }, [id]);

  return (
    <div className="cast-list">
      <h2 className="cast-title">Top Billed Cast</h2>
      <div className="tv-cast-list-container">
        {casts &&
          casts?.slice(0, 7).map((cast) => (
            <Card
              sx={{
                margin: "0.5rem",
                borderRadius: "12px",
                maxWidth: "175px",
                maxHeight: "275px",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  sx={{ height: "160px" }}
                  image={
                    cast.profile_path
                      ? `${base_url}${cast?.profile_path}`
                      : "https://i.pinimg.com/564x/38/aa/95/38aa95f88d5f0fc3fc0f691abfaeaf0c.jpg"
                  }
                  alt="cast-profile"
                />
                <CardContent>
                  <Typography gutterBottom variant="p" component="div">
                    {cast?.original_name}
                  </Typography>
                  <Typography variant="p" color="text.secondary">
                    {cast?.character}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
      </div>
    </div>
  );
}

export default TVCastList;
