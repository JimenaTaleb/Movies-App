import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Box, Typography } from "@mui/material";

export default function MovieTrailer() {
  const { id } = useParams();
  const [trailerKey, setTrailerKey] = useState("");

  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=5fbf63f58cb80df7053368c78b3f3399`
    )
      .then(({ data }) => {
        const trailers = data.results.filter(
          (video) => video.type === "Trailer" && video.site === "YouTube"
        );
        if (trailers.length > 0) {
          setTrailerKey(trailers[0].key);
        }
      })
      .catch((error) => console.error("Error fetching movie trailer: ", error));
  }, [id]);

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



