//Importo useEffect y useState
import { useEffect, useState } from "react";

//Importo hooks de React Router
import { useParams, useNavigate } from "react-router-dom";

//Importo componentes de MUI
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Button,
  Typography,
} from "@mui/material";

//Importo hook
import useMovies from "../hooks/useMovies";

//Importo componentes
import Loader from "../components/Loader";
import NotFound from "../components/NotFound";

export default function MovieDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { movie, getMovieDetails, isLoading } = useMovies();
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    getMovieDetails(id)
      .then(() => setHasError(false))
      .catch(() => setHasError(true));
  }, [id]);

  return (
    <Box position="relative">
      {isLoading ? (
        <Loader />
      ) : hasError || !movie ? (
        <NotFound />
      ) : (
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
                  minWidth: "200px",
                  width: "500px",
                  maxHeight: "600px",
                  objectFit: "contain",
                }}
              />
              <CardContent
                sx={{
                  color: "#f1f1f1",
                  minWidth: "100px",
                  width: "400px",
                  textAlign: "left",
                }}
              >
                <Typography
                  variant="h4"
                  component="div"
                  gutterBottom
                  sx={{ fontSize: { xs: 15, sm: 25, md: 32 } }}
                >
                  {movie.title}
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{ fontSize: { xs: 10, sm: 16, md: 20 } }}
                >
                  {movie.overview}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontSize: { xs: 10, sm: 16, md: 20 } }}
                >
                  Release Date: {movie.release_date}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    marginBottom: "20px",
                    fontSize: { xs: 10, sm: 18, md: 20 },
                  }}
                >
                  Genres: {movie.genres.map((genre) => genre.name).join(", ")}
                </Typography>
                <Button
                  onClick={() => navigate(`/trailer/${id}`)}
                  sx={{
                    color: "#f1f1f1",
                    backgroundColor: "#231841",
                    border: "1px solid #9cdbd4",
                    "&:hover": {
                      boxShadow: "0px 4px 8px #9cdbd4",
                      backgroundColor: "#231841",
                    },
                    fontSize: { xs: 10, sm: 15, md: 18 },
                  }}
                >
                  Ver Tráiler
                </Button>
              </CardContent>
            </Box>
          </CardMedia>
        </Card>
      )}
    </Box>
  );
}
