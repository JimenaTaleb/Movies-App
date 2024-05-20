import React, { useContext } from "react";
import { MyListContext } from "../context/MyListContext";
import CarouselMovie from "./CarouselMovie";

export default function CarouselMyList() {
  const { myList } = useContext(MyListContext);

  if (myList.length === 0) {
    return <p>No hay películas agregadas.</p>; 
  }

  return (
    <CarouselMovie
      movies={myList}
      title="Mi Lista"
    />
  );
}

