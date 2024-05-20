import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Box, Card, CardMedia, CardContent, Container, Button, Typography } from "@mui/material";
import useMovies from "../hooks/useMovies";

export default function MovieDetails() {
  const { id } = useParams();
  const { movie, getMovieDetails } = useMovies();

  useEffect(() => {
    getMovieDetails(id);
  }, [id, getMovieDetails]);

  if (!movie) {
    return <Typography variant="h5">Movie not found</Typography>;
  }

  return (
    <Container>
      <Card sx={{ display: "flex", marginTop: 2 }}>
        <CardMedia
          component="img"
          sx={{ width: "300px" }}
          image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <Box sx={{ display: "flex", flexDirection: "column", padding: 2 }}>
          <CardContent>
            <Typography variant="h4" component="div" gutterBottom>
              {movie.title}
            </Typography>
            <Typography variant="body1" paragraph>
              {movie.overview}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Release Date: {movie.release_date}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Genres: {movie.genres.map((genre) => genre.name).join(", ")}
            </Typography>
          </CardContent>
          <Button
            component={Link}
            to={`/trailer/${id}`}
            variant="contained"
            color="primary"
            sx={{ marginTop: "auto" }}
          >
            Ver Tráiler
          </Button>
        </Box>
      </Card>
    </Container>
  );
}