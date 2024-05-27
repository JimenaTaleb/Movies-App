//Importo componentes de MUI
import { Stack, Typography, Box, ButtonGroup, Button } from "@mui/material/";

//Importo hook de React
import { useNavigate } from "react-router-dom";

//Importo iconos de ReactIcons
import { FcFilmReel } from "react-icons/fc";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header style={{ backgroundColor: "#231841", padding: "10px 20px" }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
        sx={{
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          sx={{ mb: { xs: 2, md: 0 } }}
        >
          <Typography
            sx={{
              fontFamily: "Sarabun",
              fontSize: { xs: 30, md: 40, lg: 50 },
              color: "#f1f1f1",
              fontWeight: "bold",
              textShadow: "2px 2px 2px #9cdbd4",
            }}
          >
            Movies App
          </Typography>
          <Box
            pb={1}
            display="flex"
            justifyContent="center"
            gap={13}
            sx={{
              fontSize: { xs: 30, md: 40, lg: 50 },
            }}
          >
            <FcFilmReel />
          </Box>
        </Stack>
        <ButtonGroup
          variant="outlined"
          aria-label="Basic button group"
          sx={{
            flexDirection: "row",
            "& .MuiButton-root": {
              color: "#f1f1f1",
              borderColor: "#9cdbd4",
              margin: { xs: "2 0", sm: "0 5" },
              fontSize: { xs: 8, sm: 14 },
              padding: { xs: "5px 10px", sm: "6px 16px" },
              "&:hover": {
                borderColor: "#f1f1f1",
                boxShadow: "0px 4px 8px #9cdbd4",
              },
            },
          }}
        >
          <Button onClick={() => navigate("/")}>Home</Button>
          <Button onClick={() => navigate("/recent-releases")}>
          Recent Releases
          </Button>
          <Button onClick={() => navigate("/popular")}>Popular Movies</Button>
          <Button onClick={() => navigate("/my-list")}>My List</Button>
          <Button onClick={() => navigate("/search")}>Search</Button>
        </ButtonGroup>
      </Stack>
    </header>
  );
}
