//Importo componentes de MUI
import { Typography, Box } from "@mui/material";

//Importo iconos de ReactIcons
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#231841", padding: "10px 20px", marginTop: "50px"}}>
      <Typography
        align="center"
        sx={{
          fontSize: { xs: 15, md: 20, lg: 25 },
          color: "#fff",
          fontWeight: "bold",
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
        <a href="https://www.linkedin.com/in/jimenataleb">
          <FaLinkedin color="#fff" />
        </a>
        <a href="https://github.com/JimenaTaleb">
          <FaGithub color="#fff" />
        </a>
        <a href="mailto:jime-taleb@hotmail.com">
          <MdAlternateEmail color="#fff" />
        </a>
      </Box>
    </footer>
  );
}