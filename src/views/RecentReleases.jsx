import { Box, Pagination, Typography } from "@mui/material";
import MovieCard from "../components/MovieCard";
import { useEffect, useState } from "react";
import axios from "axios";

export default function RecentReleases() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=5fbf63f58cb80df7053368c78b3f3399&page=${page}`
    )
      .then(({ data }) => {
        console.log(data);
        setTotalPages(data.total_pages);
        setMovies(data.results);
      })
      .catch((error) => console.log(error));
  }, [page]);

  return (
    <section>
      <Typography variant="h2">Lanzamientos recientes</Typography>

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
