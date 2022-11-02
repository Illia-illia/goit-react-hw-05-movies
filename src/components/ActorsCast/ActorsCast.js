import { onCasts } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { List, Item, Text } from './ActorsCast.styled';
import PropTypes from 'prop-types';

const ActorsCast = () => {
  const { id } = useParams();
  const [casts, setCasts] = useState([]);
  const castPicture = {
    base_url: 'https://image.tmdb.org/t/p/',
    size: 'w300',
  };

  useEffect(() => {
    onCasts(id).then(res => setCasts(res.cast));
  }, [id]);
  return (
    <List>
      {casts.map(({ name, id, profile_path }) => {
        if (profile_path === null) {
          return (
            <Item key={id}>
              <img
                alt={name}
                height={450}
                width={300}
                src="https://media.istockphoto.com/vectors/error-page-or-file-not-found-icon-vector-id924949200?k=20&m=924949200&s=170667a&w=0&h=-g01ME1udkojlHCZeoa1UnMkWZZppdIFHEKk6wMvxrs="
              />
              <Text>{name}</Text>
            </Item>
          );
        }
        return (
          <Item key={id}>
            <img
              alt=""
              src={`${castPicture.base_url}${castPicture.size}${profile_path}`}
            />
            <Text>{name}</Text>
          </Item>
        );
      })}
    </List>
  );
};

List.propTypes = {
  casts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default ActorsCast;
