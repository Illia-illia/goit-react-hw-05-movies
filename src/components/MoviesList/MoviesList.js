import { Link, useLocation } from 'react-router-dom';
import {
  List,
  Item,
  Img,
  TextWrap,
  Title,
  Text,
  Main,
} from './MoviesList.styled';
import PropTypes from 'prop-types';
// import { Img } from 'components/HomePage/HomePage.styled';

const MovieList = ({ movies }) => {
  const moviesPicture = {
    base_url: 'https://image.tmdb.org/t/p/',
    size: 'w300',
  };

  const location = useLocation();
  return (
    <Main>
      <List>
        {movies.map(
          ({ id, title, poster_path, release_date, vote_average }) => {
            if (poster_path === null) {
              return (
                <Item key={id}>
                  <Link to={`${id}`} state={{ from: location }}>
                    <div>
                      {' '}
                      <Img
                        alt={title}
                        height={450}
                        width={300}
                        src="https://media.istockphoto.com/vectors/error-page-or-file-not-found-icon-vector-id924949200?k=20&m=924949200&s=170667a&w=0&h=-g01ME1udkojlHCZeoa1UnMkWZZppdIFHEKk6wMvxrs="
                      />
                    </div>
                    <TextWrap>
                      <Title>{title}</Title>
                      <Text>
                        Date: {release_date} | {vote_average}
                      </Text>
                    </TextWrap>
                  </Link>
                </Item>
              );
            }
            return (
              <Item key={id}>
                <Link to={`${id}`} state={{ from: location }}>
                  <div>
                    <Img
                      alt={title}
                      src={`${moviesPicture.base_url}${moviesPicture.size}${poster_path}`}
                    />
                  </div>
                  <TextWrap>
                    <Title>{title}</Title>
                    <Text>
                      Date: {release_date} | {vote_average}
                    </Text>
                  </TextWrap>
                </Link>
              </Item>
            );
          }
        )}
      </List>
    </Main>
  );
};

List.propTypes = {
  trendingMovies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      release_date: PropTypes.string,
    })
  ),
};

export default MovieList;
