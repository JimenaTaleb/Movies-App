import { Box, Pagination, Typography } from "@mui/material";
import { useEffect } from "react";
import MovieCard from "../components/MovieCard";
import useMovies from "../hooks/useMovies";

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
      <Typography variant="h2">Peliculas Populares</Typography>

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

        <Pagination
          count={totalPages}
          page={page}
          onChange={handleChange}
          variant="outlined"
          shape="rounded"
        />
      </Box>
    </section>
  );
}