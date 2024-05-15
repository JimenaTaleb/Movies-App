import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";

export default function CarouselNowPlaying() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=5fbf63f58cb80df7053368c78b3f3399`
    )
      .then(({ data }) => {
        console.log(data);
        setMovies(data.results.slice(0, 15));
      })
      .catch((error) => console.log(error));
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
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>
    </section>
  );
}
