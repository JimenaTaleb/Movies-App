import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Box, Typography, Card, CardMedia, CardContent, Container, Button } from "@mui/material";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/movie/${id}?api_key=5fbf63f58cb80df7053368c78b3f3399`
    )
      .then(({ data }) => setMovie(data))
      .catch((error) => console.error("Error fetching movie details: ", error));
  }, [id]);

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


