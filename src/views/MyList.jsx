/* Modifico las secciones "Lanzamientos recientes", "Peliculas populares" y "Mi Lista", para reutilizar 
el código en 3 componentes: titulo, lista de peliculas y paginación */

//Importo context
import { useContext } from "react";
import { MyListContext } from "../context/MyListContext";

//Importo componentes
import TitleSection from "../components/TitleSection";
import MoviesContainerSection from "../components/MoviesContainerSection";
import PaginationControl from "../components/PaginationControl";

export default function MyList() {
  const { paginatedList, totalPages, page, changePage } =
    useContext(MyListContext);

  const handleChange = (event, value) => {
    changePage(value);
  };

  return (
    <section>
      <TitleSection title="Mi Lista" />
      <MoviesContainerSection movies={paginatedList} />
      <PaginationControl
        totalPages={totalPages}
        page={page}
        handleChange={handleChange}
      />
    </section>
  );
}
