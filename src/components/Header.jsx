//Importo componentes de MUI
import { Typography, Button, ButtonGroup, Stack } from "@mui/material/";
//Importo hook de React
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header style={{ backgroundColor: '#001529', padding: '10px 20px' }}>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        alignItems="center"
        justifyContent="space-between"
        sx={{ 
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: 30, md: 40, lg: 50 },
            color: '#fff',
            fontWeight: 'bold',
            mb: { xs: 2, md: 0 }
          }}
        >
          Movies App
        </Typography>
        <ButtonGroup
          variant="outlined"
          aria-label="Basic button group"
          sx={{ 
            flexDirection: { xs: 'row', sm: 'row' },
            '& .MuiButton-root': {
              color: '#fff',
              borderColor: '#fff',
              margin: { xs: '2px 0', sm: '0 5px' },
              fontSize: { xs: '8px', sm: '14px' },
              padding: { xs: '5px 10px', sm: '6px 16px' },
              '&:hover': {
                borderColor: '#f1f1f1',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
              },
            },
          }}
        >
          <Button onClick={() => navigate("/")}>Home</Button>
          <Button onClick={() => navigate("/recent-releases")}>
            Lanzamientos recientes
          </Button>
          <Button onClick={() => navigate("/popular")}>Populares</Button>
          <Button onClick={() => navigate("/my-list")}>Mi lista</Button>
          <Button onClick={() => navigate("/search")}>Buscar</Button>
        </ButtonGroup>
      </Stack>
    </header>
  );
}