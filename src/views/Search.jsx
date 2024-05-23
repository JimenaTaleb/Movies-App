import { useState, useEffect } from "react";
import { Box, TextField } from "@mui/material";
import TitleSection from "../components/TitleSection";
import MoviesContainerSection from "../components/MoviesContainerSection";
import PaginationControl from "../components/PaginationControl";
import useMovies from "../hooks/useMovies";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const { movies, totalPages, searchMovies, changePage, page } = useMovies();

  const handlePageChange = (event, value) => {
    changePage(value);
  };

  useEffect(() => {
    if (searchTerm.length > 0) {
      searchMovies(searchTerm, page);
    }
  }, [searchTerm, page]);

  return (
    <Box>
      <TextField
        label="Buscar Película"
        variant="outlined"
        fullWidth
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        value={searchTerm}
        sx={{ marginBottom: "20px" }}
      />
      {movies.length > 0 && (
        <Box>
          <TitleSection title="Resultados de la búsqueda" />
          <MoviesContainerSection movies={movies}/>
          <PaginationControl totalPages={totalPages} page={page} handleChange={handlePageChange} />
        </Box>
      )}
    </Box>
  );
}