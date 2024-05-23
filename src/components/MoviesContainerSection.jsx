//Importo componentes de MUI
import { Box, Typography } from "@mui/material";

//Importo componente MovieCard
import MovieCard from "../components/MovieCard";

export default function MoviesContainerSection({ movies }) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "10px",
        flexDirection: "row",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      {movies.length > 0 ? (
        movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            posterPath={movie.poster_path}
          />
        ))
      ) : (
        <Typography variant="h5">No hay películas disponibles</Typography>
      )}
    </Box>
  );
}