//Importo useEffect
import { useEffect, useState } from "react";

//Importo customHook
import useMovies from "../hooks/useMovies";

//Importo componentes
import CarouselMovie from "./CarouselMovie";
import Loader from "../components/Loader";
import NotFound from "../components/NotFound";

export default function CarouselPopular() {
  const { movies, getMovies, isLoading } = useMovies();
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    getMovies("popular", 1)
      .then(() => setHasError(false))
      .catch(() => setHasError(true));
  }, []);

  return (
    <section style={{ marginTop: "0", paddingTop: "0" }}>
      {isLoading ? (
        <Loader />
      ) : hasError ? (
        <NotFound />
      ) : (
        <CarouselMovie
          movies={movies.slice(0, 20)}
          title="Películas Populares"
        />
      )}
    </section>
  );
}
