//Importo context
import { useContext } from "react";
import { MyListContext } from "../context/MyListContext";

//Importo componentes
import CarouselMovie from "./CarouselMovie";
import { Typography, Box } from "@mui/material";

export default function CarouselMyList() {
  const { myList } = useContext(MyListContext);

  return (
    myList.length === 0 ? (
      <Box>
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Sarabun",
            fontSize: { xs: 15, md: 25, lg: 35 },
            color: "#231841",
            fontWeight: "bold",
            marginBottom: "20px",
            marginLeft: "20px",
            textShadow: "2px 2px 2px #9cdbd4",
          }}
        >
          My List
        </Typography>
        <Typography
          sx={{
            fontFamily: "Sarabun",
            fontSize: { xs: 8, md: 18, lg: 28 },
            color: "#231841",
            fontWeight: "bold",
            marginBottom: "20px",
            marginLeft: "20px",
          }}
        >
          There are no added movies
        </Typography>
      </Box>
    ) : (
      <CarouselMovie movies={myList} title="My List" />
    )
  );
}
