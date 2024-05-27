/* Modifico las secciones "Lanzamientos recientes", "Peliculas populares" y "Mi Lista", para reutilizar 
el código en 3 componentes: titulo, lista de peliculas y paginacion */

//Importo hook
import { useEffect, useState } from "react";
import useMovies from "../hooks/useMovies";

//Importo componentes
import TitleSection from "../components/TitleSection";
import MoviesContainerSection from "../components/MoviesContainerSection";
import PaginationControl from "../components/PaginationControl";
import Loader from "../components/Loader";
import NotFound from "../components/NotFound";

export default function Popular() {
  const { movies, totalPages, getMovies, changePage, page, isLoading } =
    useMovies();
  const [hasError, setHasError] = useState(false);

  const handleChange = (event, value) => {
    changePage(value);
  };

  useEffect(() => {
    getMovies("popular", page)
      .then(() => setHasError(false))
      .catch(() => setHasError(true));
  }, [page]);

  return (
    <section>
      {isLoading ? (
        <Loader />
      ) : hasError ? (
        <NotFound />
      ) : (
        <>
          <TitleSection title="Peliculas Populares" />
          <MoviesContainerSection movies={movies} />
          <PaginationControl
            totalPages={totalPages}
            page={page}
            handleChange={handleChange}
          />
        </>
      )}
    </section>
  );
}
