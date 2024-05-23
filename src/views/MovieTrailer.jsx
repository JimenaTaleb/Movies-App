//Importo hooks
import { useEffect, useState } from "react";

//Importo hooks de React Router
import { useParams, useNavigate } from "react-router-dom";

//Importo componentes de MUI
import { Box, Typography, Modal, Button } from "@mui/material";

//Importo custom hook
import useMovies from "../hooks/useMovies";

export default function MovieTrailer() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { trailerKey, getTrailer } = useMovies();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getTrailer(id);
    setOpen(true);
  }, [id, getTrailer]);

  const handleClose = () => {
    setOpen(false);
    navigate(-1);
  };

  if (!trailerKey) {
    return <Typography variant="h5">No trailer available</Typography>;
  }

  return (
    <Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="trailer-modal"
        aria-describedby="trailer-modal-description"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backdropFilter: "blur(60px)",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "90%",
            height: "700px",
          }}
        >
          <Button
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: -45,
              right: -40,
              zIndex: 1000,
              color: "#f1f1f1",
              fontSize: "20px",
            }}
          >
            X
          </Button>

          <Box sx={{ width: "100%", height: "100%" }}>
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Trailer"
              style={{ border: "none" }}
            />
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}