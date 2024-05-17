import { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import MovieCard from '../components/MovieCard';
import { MyListContext } from '../context/MyListContext';

export default function MyList() {
  const { myList } = useContext(MyListContext);

  return (
    <Box>
      <Typography variant="h2">Mi Lista</Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
        }}
      >
        {myList.length > 0 ? (
          myList.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              posterPath={movie.posterPath}
            />
          ))
        ) : (
          <Typography variant="h5">No hay películas en tu lista.</Typography>
        )}
      </Box>
    </Box>
  );
}

