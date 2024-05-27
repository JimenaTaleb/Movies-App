//Importo hook de React
import { useContext } from "react";

//Importo hook de React Router
import { useNavigate } from "react-router-dom";

//Importo context
import { MyListContext } from "../context/MyListContext";

//Importo componentes de MUI
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Tooltip,
} from "@mui/material";

//Importo iconos
import { Favorite, FavoriteBorder } from "@mui/icons-material";

export default function MovieCard({ id, title, posterPath }) {
  const navigate = useNavigate();
  const { addToMyList, removeFromMyList, isInMyList } =
    useContext(MyListContext);

  const handleToggleMyList = () => {
    if (isInMyList(id)) {
      removeFromMyList(id);
    } else {
      addToMyList({ id, title, poster_path: posterPath });
    }
  };

  return (
    <Card
      sx={{
        width: { xs: "80%", sm: "40%", md: "30%", lg: "15%" },
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
    >
      <CardMedia
        component="img"
        image={`https://image.tmdb.org/t/p/w500${posterPath}`}
        alt={title}
        sx={{ width: "100%", height: "300px", cursor: "pointer" }}
        onClick={() => navigate(`/movie/${id}`)}
      />
      <CardContent
        sx={{
          backgroundColor: "#231841",
          color: "#f1f1f1",
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
            fontSize: "17",
          }}
        >
          {title}
        </Typography>
        <Tooltip
          title={isInMyList(id) ? "Quitar de Mi Lista" : "Agregar a Mi Lista"}
        >
          <IconButton
            onClick={handleToggleMyList}
            sx={{
              color: isInMyList(id) ? "#9cdbd4" : "#f1f1f1",
            }}
          >
            {isInMyList(id) ? <Favorite /> : <FavoriteBorder />}
          </IconButton>
        </Tooltip>
      </CardContent>
    </Card>
  );
}
