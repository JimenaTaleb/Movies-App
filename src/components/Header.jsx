import { Typography, Button, ButtonGroup } from "@mui/material/";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header>
      <Typography variant="h1">Movies App</Typography>
      <ButtonGroup variant="contained" aria-label="Basic button group">
        <Button onClick={() => navigate("/")}>Home</Button>
        <Button onClick={() => navigate("/recent-releases")}>
          Lanzamientos recientes
        </Button>
        <Button onClick={() => navigate("/popular")}>Populares</Button>
        <Button onClick={() => navigate("/my-list")}>Mi lista</Button>
        <Button onClick={() => navigate("/search")}>Buscar</Button>
      </ButtonGroup>
    </header>
  );
}
