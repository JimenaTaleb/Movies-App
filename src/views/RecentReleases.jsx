/* Modifico las secciones "Lanzamientos recientes", "Peliculas populares" y "Mi Lista", para reutilizar 
el código en 3 componentes: titulo, lista de peliculas y paginacion */

import { useEffect } from "react";
import TitleSection from "../components/TitleSection";
import MoviesContainerSection from "../components/MoviesContainerSection";
import PaginationControl from "../components/PaginationControl";
import useMovies from "../hooks/useMovies";

export default function RecentReleases() {
  const { movies, totalPages, getMovies, changePage, page } = useMovies();

  const handleChange = (event, value) => {
    changePage(value);
  };

  useEffect(() => {
    getMovies("now_playing", page);
  }, [page]);

  return (
    <section>
      <TitleSection title="Lanzamientos recientes" />
      <MoviesContainerSection movies={movies} />
      <PaginationControl
        totalPages={totalPages}
        page={page}
        handleChange={handleChange}
      />
    </section>
  );
}
