/* Modifico las secciones "Lanzamientos recientes", "Peliculas populares" y "Mi Lista", para reutilizar 
el código en 3 componentes: titulo, lista de peliculas y paginacion */

//Importo hook
import { useEffect } from "react";
import useMovies from "../hooks/useMovies";

//Importo componentes
import TitleSection from "../components/TitleSection";
import MoviesContainerSection from "../components/MoviesContainerSection";
import PaginationControl from "../components/PaginationControl";

export default function Popular() {
  const { movies, totalPages, getMovies, changePage, page } = useMovies();

  const handleChange = (event, value) => {
    changePage(value);
  };

  useEffect(() => {
    getMovies("popular", page);
  }, [page]);

  return (
    <section>
      <TitleSection title="Películas Populares" />
      <MoviesContainerSection movies={movies} />
      <PaginationControl
        totalPages={totalPages}
        page={page}
        handleChange={handleChange}
      />
    </section>
  );
}