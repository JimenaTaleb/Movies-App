import React, { useState, useEffect } from "react";
import { Box, TextField, Typography, Pagination } from "@mui/material";
import MovieCard from "../components/MovieCard";
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
          <Typography variant="h5">Resultados de Búsqueda</Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
            }}
          >
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                posterPath={movie.poster_path}
              />
            ))}
          </Box>
          <Pagination
            count={totalPages}
            page={page}
            onChange={handlePageChange}
            variant="outlined"
            shape="rounded"
            sx={{ marginTop: "20px", display: "flex", justifyContent: "center" }}
          />
        </Box>
      )}
    </Box>
  );
}


