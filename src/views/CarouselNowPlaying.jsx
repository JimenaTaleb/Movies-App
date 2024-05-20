import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Card, CardMedia, CardContent, Button, Typography } from "@mui/material";
import useMovies from "../hooks/useMovies";

export default function CarouselNowPlaying() {
  const { movies, getMovies } = useMovies();

  useEffect(() => {
    getMovies("now_playing", 1);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <section>
      <Slider {...settings}>
        {movies.map((movie) => (
          <Box key={movie.id} position="relative" padding="10px">
            <Card>
              <CardMedia
                component="img"
                image={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={movie.title}
                sx={{ width: "100%", height: "300px" }}
              />
              <CardContent
                sx={{
                  position: "absolute",
                  bottom: 10,
                  left: 10,
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                  padding: "10px",
                  maxWidth: "80%",
                }}
              >
                <Typography variant="h5">{movie.title}</Typography>
                <Typography variant="body2">{movie.overview}</Typography>
                <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none", marginTop: "10px" }}>
                  <Button variant="contained" color="primary">
                    Ver más
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>
    </section>
  );
}



