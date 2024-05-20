import React, { useEffect } from "react";
import CarouselMovie from "./CarouselMovie";
import useMovies from "../hooks/useMovies";

export default function CarouselPopular(){
  const { movies, getMovies } = useMovies();
  
  useEffect(() => {
    getMovies("top_rated", 1);
  }, []);
  
  return (
    <CarouselMovie
      movies={movies.slice(0, 20)}
      title="Películas Mejor Ranqueadas"
    />
  );
};
