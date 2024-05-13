import { Typography, Button, ButtonGroup } from "@mui/material/";

export default function Header() {
  return (
    <header>
      <Typography variant="h1">Movies App</Typography>
      <ButtonGroup variant="contained" aria-label="Basic button group">
        <Button>Home</Button>
        <Button>Últimos lanzamientos</Button>
        <Button>Populares</Button>
        <Button>Mi lista</Button>
        <Button>Buscar</Button>
      </ButtonGroup>
    </header>
  );
}
