import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Tooltip,
} from "@mui/material";
import {
  ArrowBackIos,
  ArrowForwardIos,
  Favorite,
  FavoriteBorder,
} from "@mui/icons-material";
import { MyListContext } from "../context/MyListContext";

export default function CarouselMovie({ movies, title }) {
  const navigate = useNavigate();

  const { addToMyList, removeFromMyList, isInMyList } =
    useContext(MyListContext);

  const NextArrow = ({ onClick }) => {
    return (
      <IconButton
        onClick={onClick}
        style={{
          position: "absolute",
          top: "50%",
          right: 0,
          transform: "translate(0, -50%)",
          zIndex: 2,
        }}
      >
        <ArrowForwardIos style={{ color: "#231841" }} />
      </IconButton>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <IconButton
        onClick={onClick}
        style={{
          position: "absolute",
          top: "50%",
          left: 0,
          transform: "translate(0, -50%)",
          zIndex: 2,
        }}
      >
        <ArrowBackIos style={{ color: "#fff" }} />
      </IconButton>
    );
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section style={{ marginTop: "30px", marginBottom: "30px" }}>
      <Typography
        variant="h2"
        sx={{
          fontFamily: "Sarabun",
          fontSize: { xs: 15, md: 25, lg: 35 },
          color: "#231841",
          fontWeight: "bold",
          marginBottom: "20px",
          marginLeft: "20px",
          textShadow: "2px 2px 2px #9cdbd4",
        }}
      >
        {title}
      </Typography>

      <Slider {...settings}>
        {movies.map((movie) => (
          <Box position="relative" key={movie.id}>
            <Card
              sx={{
                width: "80%",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <CardMedia
                component="img"
                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                sx={{ width: "100%", height: "300px", cursor: "pointer" }}
                onClick={() => navigate(`/movie/${movie.id}`)}
              />

              <CardContent
                sx={{
                  backgroundColor: "#231841",
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "Sarabun",
                    flex: 1,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    color: "white",
                    textAlign: "center",
                    display: { xs: "none", sm: "block" },
                    fontSize: "17px",
                  }}
                >
                  {movie.title}
                </Typography>
                <Tooltip
                  title={
                    isInMyList(movie.id)
                      ? "Quitar de Mi Lista"
                      : "Agregar a Mi Lista"
                  }
                >
                  <IconButton
                    onClick={() =>
                      isInMyList(movie.id)
                        ? removeFromMyList(movie.id)
                        : addToMyList(movie)
                    }
                    sx={{
                      color: isInMyList(movie.id) ? "#9cdbd4" : "white",
                    }}
                  >
                    {isInMyList(movie.id) ? <Favorite /> : <FavoriteBorder />}
                  </IconButton>
                </Tooltip>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>
    </section>
  );
}
