//Importo componentes de MUI
import { Typography, Box } from "@mui/material";

//Importo iconos de ReactIcons
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#231841", padding: "10px 20px" }}>
      <Typography
        align="center"
        sx={{
          fontFamily: "Sarabun",
          fontSize: { xs: 15, md: 20, lg: 25 },
          color: "#fff",
          fontWeight: "bold",
          textShadow: "1px 1px 1px #9cdbd4",
          mb: { xs: 2, md: 0 },
        }}
      >
        &copy; 2024 - by Jimena Taleb
      </Typography>
      <Box
        pb={1}
        display="flex"
        justifyContent="center"
        gap={13}
        sx={{
          fontSize: { xs: 15, md: 20, lg: 25 },
        }}
      >
        <a
          href="https://www.linkedin.com/in/jimenataleb"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin color="#f1f1f1" />
        </a>
        <a
          href="https://github.com/JimenaTaleb"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub color="#f1f1f1" />
        </a>
        <a
          href="mailto:jime-taleb@hotmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdAlternateEmail color="#f1f1f1" />
        </a>
      </Box>
    </footer>
  );
}
