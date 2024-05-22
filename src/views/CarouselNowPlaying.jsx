//Importo useEffect
import { useEffect } from "react";

//Importo useNavigate
import { useNavigate } from "react-router-dom";

//Importo Slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Importo de MUI
import {
  useTheme,
  useMediaQuery,
  Box,
  Card,
  CardMedia,
  CardContent,
  Button,
  Typography,
} from "@mui/material";

//Importo customHook
import useMovies from "../hooks/useMovies";

export default function CarouselNowPlaying() {
  const navigate = useNavigate();

  const { movies, getMovies } = useMovies();

  //Importo el hook useTheme para acceder a las mq y hacer responsive el diseño
  const theme = useTheme();

  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));

  const marginBottom = isLargeScreen ? 0 : 3;

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
    arrows: false,
  };

  return (
    <section style={{ marginTop: "0", paddingTop: "0" }}>
      <Slider {...settings}>
        {movies.map((movie) => (
          <Box key={movie.id} position="relative" marginBottom={marginBottom}>
            <Card sx={{ borderRadius: 0 }}>
              <CardMedia
                component="div"
                image={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={movie.title}
                sx={{
                  width: "100%",
                  height: "550px",
                  backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
                  backgroundSize: "cover",
                  backgroundPosition: "top",
                }}
              />
              <CardContent
                sx={{
                  position: "absolute",
                  bottom: 20,
                  left: "50%",
                  transform: "translateX(-50%)",
                  backgroundColor: "#69666666",
                  color: "white",
                  padding: "5px",
                  width: "50%",
                  textAlign: "center",
                  borderRadius: 0,
                }}
              >
                <Typography variant="h5">{movie.title}</Typography>
                {isLargeScreen && (
                  <Typography variant="body2">{movie.overview}</Typography>
                )}
                <Button
                  onClick={() => navigate(`/movie/${movie.id}`)}
                  sx={{
                    color: "#fff",
                    backgroundColor: "#231841",
                    border: "1px solid #9cdbd4",
                    margin: { xs: "2px 0", sm: "0 5px" },
                    fontSize: { xs: "8px", sm: "14px" },
                    padding: { xs: "5px 10px", sm: "6px 16px" },
                    "&:hover": {
                      boxShadow: "0px 4px 8px #9cdbd4",
                      backgroundColor: "#231841",
                    },
                    mt: 1,
                  }}
                >
                  Ver mas
                </Button>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>
    </section>
  );
}
