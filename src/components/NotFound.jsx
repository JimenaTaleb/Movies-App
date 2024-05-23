import notfound from "../assets/notfoundv3.jpg";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      textAlign="center"
      sx={{
        padding: 2,
        background: "#cfdef3",
      }}
    >
      <Box
        component="img"
        src={notfound}
        alt="Page Not Found"
        sx={{ maxWidth: "100%", height: "auto", mb: 2 }}
      />
      <Typography
        variant="h2"
        component="h2"
        sx={{ fontSize: { xs: "1.5rem", sm: "2rem" }, mb: 1, fontFamily: "Sarabun", color: "#231841", fontWeight: "bold", textShadow: "2px 2px 2px #9cdbd4",}}
      >
        Oh dear! Are you lost?
      </Typography>
      <Typography
        variant="h2"
        component="h2"
        sx={{ fontSize: { xs: "1.5rem", sm: "2rem" }, mb: 1, fontFamily: "Sarabun", }}
      >
        Floo powders did not work properly?
      </Typography>
      <Typography
        variant="h3"
        component="h3"
        sx={{ fontSize: { xs: "1.25rem", sm: "1.75rem" }, mb: 2, fontFamily: "Sarabun", fontWeight: "bold", textShadow: "2px 2px 2px #9cdbd4", }}
      >
        Go back to the homepage.
      </Typography>
      <Button
        onClick={() => navigate(`/`)}
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
        Volver
      </Button>
    </Box>
  );
}