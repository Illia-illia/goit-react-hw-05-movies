import {
  Link,
  List,
  Item,
  Img,
  TextWrap,
  Title,
  Main,
  Text,
} from './HomePage.styled';
import PropTypes from 'prop-types';

const { onTrending } = require('api');
const { useState, useEffect } = require('react');

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const homePicture = {
    base_url: 'https://image.tmdb.org/t/p/',
    size: 'w300',
  };
  useEffect(() => {
    onTrending().then(res => {
      setTrendingMovies(res.results);
    });
  }, []);

  return (
    <Main>
      <List>
        {trendingMovies.map(
          ({ id, title, poster_path, release_date, vote_average }) => (
            <Item key={id}>
              <Link to={`/movies/${id}`}>
                <div>
                  {' '}
                  <Img
                    alt={title}
                    src={`${homePicture.base_url}${homePicture.size}${poster_path}`}
                  />
                </div>
                <TextWrap>
                  {' '}
                  <Title>{title}</Title>
                  <Text>
                    Date: {release_date} | {vote_average}
                  </Text>
                </TextWrap>
              </Link>
            </Item>
          )
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
      vote_average: PropTypes.string,
    })
  ),
};
export default HomePage;
