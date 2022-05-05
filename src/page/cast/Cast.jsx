import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieCast } from 'Api/Api';
import { CastList, ListItem } from './Cast.styled';
import noActor from '../../imgages/actor.jpg';

export default function Cast() {
  const { moviesId } = useParams();
  const [movie, setMovie] = useState([]);
  const actorImg = 'https://image.tmdb.org/t/p/w300';
  useEffect(() => {
    getMovieCast(moviesId)
      .then(response => response.data)
      .then(response => {
        setMovie(response.cast);
      });
  }, [moviesId]);

  return (
    <>
      {
        <CastList>
          {movie.map(actor => (
            <ListItem key={actor.id}>
              <img
                src={
                  actor.profile_path
                    ? `${actorImg}${actor.profile_path}`
                    : noActor
                }
                alt={actor.name}
                width="100"
              />
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </ListItem>
          ))}
        </CastList>
      }
    </>
  );
}
