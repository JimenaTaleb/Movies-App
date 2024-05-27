//Importo componentes de MUI
import { Typography } from "@mui/material";

export default function TitleSection({ title }) {
  return (
    <Typography
      variant="h2"
      sx={{
        fontFamily: "Sarabun",
        fontSize: { xs: 30, md: 40, lg: 50 },
        color: "#231841",
        fontWeight: "bold",
        margin: "40px 0px",
        textShadow: "2px 2px 2px #9cdbd4",
        textAlign: "center",
      }}
    >
      {title}
    </Typography>
  );
}
