import "./Director.css";
import React, { useState, useEffect } from "react";
import apiService from "../app/apiService";

function MovieDirector({ id }) {
  const API_KEY = "e1f8d9135767f496aea2eddea5fd8521";
  const [director, setDirector] = useState([]);

  useEffect(() => {
    const getDirector = async () => {
      try {
        const res = await apiService.get(
          `/movie/${id}/credits?api_key=${API_KEY}`
        );
        setDirector(res.data.crew);
        // const newDirector = res.data.crew.department.filter(
        //   ({ job }) => job === "Directing"
        // );
      } catch (error) {
        console.log("error", error);
      }
    };
    getDirector();
  }, [id]);

  // const newDirector = director?.filter((department) =>
  //   department.job.includes("Director")
  // );

  return (
    // <div>
    //   {newDirector.map((director) => (
    //     <p>{director.name}</p>
    //   ))}
    // </div>
    <>
      {director
        ?.filter((department) => department.department.includes("Directing"))
        .slice(0, 2)
        .map((department) => (
          <p className="director-chip">{department.name}</p>
        ))}
    </>
  );
}

export default MovieDirector;
