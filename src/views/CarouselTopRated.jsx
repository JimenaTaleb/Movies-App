//Importo useEffect
import { useEffect } from "react";

//Importo customHook
import useMovies from "../hooks/useMovies";

//Importo componente
import CarouselMovie from "./CarouselMovie";

export default function CarouselPopular() {
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
}
