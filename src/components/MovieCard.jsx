import {Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Moviecard({ title, overview, posterPath, id }) {
  return (
    <Link to={`/detail/${id}`} style={{ textDecoration: "none" }}>
      <Card
        sx={{
          maxWidth: 345,
          margin: "20px",
          border: "1px solid #a3a2a2",
          boxShadow: "1px 1px 12px 0px rgba(77,74,74,0.75)",
        }}
      >
        <CardMedia
          component="img"
          height="300"
          width="100"
          image={`https://image.tmdb.org/t/p/w500${posterPath}`}
          alt={title}
          title={title}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              color: "#080854",
              fontWeight: "bold",
            }}
          >
            {title}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
