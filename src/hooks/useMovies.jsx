//Importo axios
import axios from "axios";

//Importo hook de React
import { useState } from "react";

//Api key y Api url
const API_KEY = "5fbf63f58cb80df7053368c78b3f3399";
const BASE_URL = "https://api.themoviedb.org/3";

export default function useMovies() {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState(null);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [trailerKey, setTrailerKey] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const showLoader = () => setIsLoading(true);
  const hideLoader = () => setIsLoading(false);

  //Info de las peliculas
  async function getMovies(movieCategory, page) {
    showLoader();
    axios(`${BASE_URL}/movie/${movieCategory}?api_key=${API_KEY}&page=${page}`)
      .then(({ data }) => {
        setTotalPages(data.total_pages);
        setMovies(data.results);
        hideLoader();
      })
      .catch((error) => console.log(error));
  }

  //Info del detalle de una pelicula
  async function getMovieDetails(movieId) {
    showLoader();
    axios(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`)
      .then(({ data }) => {
        setMovie(data);
        hideLoader();
      })
      .catch((error) => console.error(error));
  }

  //Trailer de una película
  async function getTrailer(movieId) {
    showLoader();
    axios(`${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}`)
      .then(({ data }) => {
        const trailers = data.results.filter(
          (video) => video.type === "Trailer" && video.site === "YouTube"
        );
        if (trailers.length > 0) {
          setTrailerKey(trailers[0].key);
          hideLoader();
        } else {
          setTrailerKey(null);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  //Buscador de peliculas
  async function searchMovies(query, page = 1) {
    showLoader();
    axios(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
    )
      .then(({ data }) => {
        setTotalPages(data.total_pages);
        setMovies(data.results);
        hideLoader();
      })
      .catch((error) => console.error(error));
  }

  //Paginacion
  function changePage(page) {
    setPage(page);
  }

  return {
    movies,
    movie,
    trailerKey,
    getMovies,
    getMovieDetails,
    getTrailer,
    searchMovies,
    changePage,
    totalPages,
    page,
    isLoading,
  };
}
