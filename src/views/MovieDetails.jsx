import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
import useMovies from "../hooks/useMovies";

export default function MovieDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { movie, getMovieDetails } = useMovies();

  useEffect(() => {
    getMovieDetails(id);
  }, [id, getMovieDetails]);

  if (!movie) {
    return <Typography variant="h5">Movie not found</Typography>;
  }

  return (
    <Box position="relative">
      <Card>
        <CardMedia
          component="div"
          image={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
          sx={{
            width: "100%",
            height: "100vh",
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            "&:before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.7)",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 2,
            }}
          >
            <CardMedia
              component="img"
              image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              sx={{
                width: "500px",
                maxHeight: "600px",
                objectFit: "contain",
              }}
            />
            <CardContent
              sx={{
                color: "white",
                width: "400px", 
                textAlign: "left",
              }}
            >
              <Typography variant="h4" component="div" gutterBottom>
                {movie.title}
              </Typography>
              <Typography variant="body1" paragraph>
                {movie.overview}
              </Typography>
              <Typography variant="body2">
                Release Date: {movie.release_date}
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: "20px" }}>
                Genres: {movie.genres.map((genre) => genre.name).join(", ")}
              </Typography>
              <Button
                onClick={() => navigate(`/trailer/${id}`)}
                sx={{
                  color: "#fff",
                  backgroundColor: "#231841",
                  border: "1px solid #9cdbd4",
                  "&:hover": {
                    boxShadow: "0px 4px 8px #9cdbd4",
                    backgroundColor: "#231841",
                  },
                }}
              >
                Ver Tráiler
              </Button>
            </CardContent>
          </Box>
        </CardMedia>
      </Card>
    </Box>
  );
}