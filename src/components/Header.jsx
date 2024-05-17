import { Typography, Button, ButtonGroup } from "@mui/material/";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Typography variant="h1">Movies App</Typography>
      <ButtonGroup variant="contained" aria-label="Basic button group">
        <Link to="/">
          <Button>Home</Button>
        </Link>
        <Link to="/recent-releases">
          <Button>Lanzamientos recientes</Button>
        </Link>
        <Link to="/popular">
          <Button>Populares</Button>
        </Link>
        <Link to="/my-list">
          <Button>Mi lista</Button>
        </Link>
        <Link to="/search">
          <Button>Buscar</Button>
        </Link>
      </ButtonGroup>
    </header>
  );
}
