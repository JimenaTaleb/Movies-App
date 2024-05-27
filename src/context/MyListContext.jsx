//Importo hooks de React
import { createContext, useEffect, useState } from "react";

//Exporto contexto
export const MyListContext = createContext();

//Exporto proveedor de contexto
export default function MyListContextProvider({ children }) {
  const [myList, setMyList] = useState(() => {
    const savedList = localStorage.getItem("myList");
    return savedList ? JSON.parse(savedList) : [];
  });
  const [page, setPage] = useState(1);
  const itemsPerPage = 20;

  useEffect(() => {
    if (myList !== null) {
      localStorage.setItem("myList", JSON.stringify(myList));
    }
  }, [myList]);

  const addToMyList = (movie) => {
    setMyList((prevList) => [...prevList, movie]);
  };

  const removeFromMyList = (movieId) => {
    setMyList((prevList) => prevList.filter((movie) => movie.id !== movieId));
  };

  const isInMyList = (movieId) => {
    return myList.some((movie) => movie.id === movieId);
  };

  const totalPages = Math.ceil(myList.length / itemsPerPage);

  const changePage = (newPage) => {
    setPage(newPage);
  };

  const paginatedList = myList.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const data = {
    myList,
    addToMyList,
    removeFromMyList,
    isInMyList,
    totalPages,
    page,
    changePage,
    paginatedList,
  };

  return (
    <MyListContext.Provider value={data}>{children}</MyListContext.Provider>
  );
}
