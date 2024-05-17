import { useContext } from 'react';
import { Card, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { MyListContext } from '../context/MyListContext';

export default function MovieCard({ title, overview, posterPath, id }) {
  const { myList, addToMyList, removeFromMyList } = useContext(MyListContext);

  const isMovieInList = myList.some((movie) => movie.id === id);

  const handleToggleMyList = () => {
    if (isMovieInList) {
      removeFromMyList(id);
    } else {
      addToMyList({ title, overview, posterPath, id });
    }
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: '20px',
        border: '1px solid #a3a2a2',
        boxShadow: '1px 1px 12px 0px rgba(77,74,74,0.75)',
        position: 'relative'
      }}
    >
      <Link to={`/movie/${id}`} style={{ textDecoration: 'none' }}>
        <CardMedia
          component="img"
          height="300"
          width="100"
          image={`https://image.tmdb.org/t/p/w500${posterPath}`}
          alt={title}
          title={title}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              color: '#080854',
              fontWeight: 'bold',
            }}
          >
            {title}
          </Typography>
        </CardContent>
      </Link>
      <IconButton
        onClick={handleToggleMyList}
        sx={{ position: 'absolute', top: 10, right: 10 }}
      >
        {isMovieInList ? <Favorite color="error" /> : <FavoriteBorder />}
      </IconButton>
    </Card>
  );
}


