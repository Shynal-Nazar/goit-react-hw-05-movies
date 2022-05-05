import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieReview } from 'Api/Api';

export default function Reviews() {
  const { moviesId } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    getMovieReview(moviesId)
      .then(response => response.data)
      .then(response => {
        setMovie(response.results);
      });
  }, [moviesId]);

  return (
    <>
      {movie.length > 0 ? (
        movie.map(review => (
          <div key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </div>
        ))
      ) : (
        <p>There are no Reviews</p>
      )}
    </>
  );
}
