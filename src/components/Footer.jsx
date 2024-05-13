import { Typography, Box } from "@mui/material";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer>
      <Typography
        sx={{
          fontSize: { xs: 15, md: 20, lg: 25 },
        }}
      >
        &copy; 2024 - by Jimena Taleb
      </Typography>
      <Box
        pb={2}
        display="flex"
        justifyContent="space-between"
        sx={{
          fontSize: { xs: 15, md: 20, lg: 25 },
        }}
      >
        <a href="https://www.linkedin.com/in/jimenataleb">
          <FaLinkedin color="black" />
        </a>
        <a href="https://github.com/JimenaTaleb">
          <FaGithub color="black" />
        </a>
        <a href="mailto:jime-taleb@hotmail.com">
          <MdAlternateEmail color="black" />
        </a>
      </Box>
    </footer>
  );
}