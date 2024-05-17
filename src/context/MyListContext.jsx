import { createContext, useEffect, useState } from 'react';

export const MyListContext = createContext();

export const MyListProvider = ({ children }) => {
  const [myList, setMyList] = useState([]);

  useEffect(() => {
    const myListLS = JSON.parse(localStorage.getItem('myList'));
    if (myListLS) {
      setMyList(myListLS);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('myList', JSON.stringify(myList));
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

  const totalMyList = () => {
    return myList.length;
  };

  const data = {
    myList,
    addToMyList,
    removeFromMyList,
    isInMyList,
    totalMyList,
  };

  return (
    <MyListContext.Provider value={data}>
      {children}
    </MyListContext.Provider>
  );
};

