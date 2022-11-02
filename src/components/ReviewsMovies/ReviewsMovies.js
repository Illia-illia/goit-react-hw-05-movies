import { onReviews } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ReviewsMovies = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    onReviews(id).then(res => setReviews(res.results));
  }, [id]);

  if (reviews.length === 0) {
    return <h3>No reviews...</h3>;
  }

  return (
    <ul>
      {reviews.map(({ id, content, author }) => (
        <li key={id}>
          <h3>{author} :</h3>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

export default ReviewsMovies;
