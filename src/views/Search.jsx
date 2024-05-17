import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, TextField, Typography, Pagination } from "@mui/material";
import MovieCard from "../components/MovieCard";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    if (searchTerm.length > 0) {
      axios(
        `https://api.themoviedb.org/3/search/movie?api_key=5fbf63f58cb80df7053368c78b3f3399&query=${searchTerm}&page=${page}`
      )
        .then(({ data }) => {
            console.log(data);
          setResults(data.results);
          setTotalPages(data.total_pages);
        })
        .catch((error) => console.log(error));
    } else {
      setResults([]);
      setTotalPages(1);
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
          setPage(1);
        }}
        value={searchTerm}
        sx={{ marginBottom: "20px" }}
      />
      {results.length > 0 && (
        <Box>
          <Typography variant="h5">Resultados de Búsqueda</Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
            }}
          >
            {results.map((movie) => (
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

