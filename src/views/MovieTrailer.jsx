import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import useMovies from "../hooks/useMovies";

export default function MovieTrailer() {
  const { id } = useParams();
  const { trailerKey, getTrailer } = useMovies();

  useEffect(() => {
    getTrailer(id);
  }, [id, getTrailer]);

  if (!trailerKey) {
    return <Typography variant="h5">No trailer available</Typography>;
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
      <Link to={`/movie/${id}`} style={{ textDecoration: "none" }}>
        <button>x</button>
      </Link>
      <iframe
        width="800"
        height="450"
        src={`https://www.youtube.com/embed/${trailerKey}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Trailer"
      />
    </Box>
  );
}