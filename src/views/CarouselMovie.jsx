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
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { FaBedPulse } from "react-icons/fa6";

export default function CarouselMovie({ movies, title }){
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
        <ArrowForwardIos style={{ color: "white" }} />
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
        <ArrowBackIos style={{ color: "white" }} />
      </IconButton>
    );
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section>
      <Typography variant="h2">{title}</Typography>
      <Slider {...settings}>
        {movies.map((movie) => (
          <Box key={movie.id} position="relative" padding="10px" sx={{ marginRight: "20px" }}>
            <Card>
              <CardMedia
                component="img"
                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                sx={{ width: "100%", height: "auto" }}
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
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>
    </section>
  );
};



