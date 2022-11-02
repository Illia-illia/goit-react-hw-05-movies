import { onDetails } from 'api';
import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import {
  GoBackLink,
  Link,
  Wrap,
  Img,
  PosterWrap,
  InfoWrap,
  Item,
} from './MovieInfo.styled';
import PropTypes from 'prop-types';

const MovieInfo = () => {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();

  const moviePicture = {
    base_url: 'https://image.tmdb.org/t/p/',
    size: 'w500',
    picture: movie.poster_path,
  };

  const location = useLocation();
  const goBackLink = location.state?.from ?? `/Movies`;

  useEffect(() => {
    onDetails(id).then(res => setMovie(res));
  }, [id]);

  return (
    <Wrap>
      <GoBackLink to={goBackLink}> Go back</GoBackLink>
      <PosterWrap>
        <div>
          <Img
            src={`${moviePicture.base_url}${moviePicture.size}${moviePicture.picture}`}
            alt=""
          />
        </div>
        <InfoWrap>
          <h2>{movie.title}</h2>
          <p>Release date: {movie.release_date}</p>
          <ul>
            <Item>
              <h3>Overview:</h3> {movie.overview}
            </Item>
            <Item>
              <h3>Budget: </h3>
              {movie.budget}$
            </Item>
            <Item>
              <h3>Vote average : </h3>
              {movie.vote_average}
            </Item>
          </ul>
        </InfoWrap>
      </PosterWrap>
      <Link to="cast" state={location.state}>
        Cast
      </Link>
      <Link to="reviews" state={location.state}>
        Reviews
      </Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Wrap>
  );
};

Wrap.propTypes = {
  movie: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      release_date: PropTypes.string,
      vote_average: PropTypes.string,
      budget: PropTypes.number,
    })
  ),
};

export default MovieInfo;
