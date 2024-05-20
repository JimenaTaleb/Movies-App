import { createContext, useEffect, useState } from 'react';

export const MyListContext = createContext();

export default function MyListContextProvider({ children }) {
  const [myList, setMyList] = useState(() => {
    const savedList = localStorage.getItem('myList');
    return savedList ? JSON.parse(savedList) : [];
  });

  useEffect(() => {
    if (myList !== null) {
      localStorage.setItem('myList', JSON.stringify(myList));
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

  const data = {
    myList,
    addToMyList,
    removeFromMyList,
    isInMyList
  };

  return (
    <MyListContext.Provider value={data}>
      {children}
    </MyListContext.Provider>
  );
}


