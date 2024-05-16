import React, { useEffect, useState } from "react";
import axios from "axios";
import CarouselMovie from "./CarouselMovie";

export default function CarouselPopular(){
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=5fbf63f58cb80df7053368c78b3f3399`
    )
      .then(({ data }) => {
        setMovies(data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <CarouselMovie
      movies={movies}
      title="Películas Populares"
    />
  );
};



