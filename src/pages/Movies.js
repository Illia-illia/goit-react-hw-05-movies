import { onSearch } from 'api';
import MovieList from 'components/MoviesList/MoviesList';
import Search from 'components/Search/Search';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const handleInput = async e => {
    return await onSearch(e).then(res => setMovies(res.results));
  };

  return (
    <div>
      <Search onSubmit={handleInput}></Search>
      <MovieList movies={movies} />
      <Outlet />
    </div>
  );
};

export default Movies;
