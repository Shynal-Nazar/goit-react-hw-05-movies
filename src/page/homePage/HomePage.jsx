import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getTrendingMovies } from 'Api/Api';
import { Link } from 'layout/Content.styled';
import {
  GridList,
  GalleryCard,
  GalleryImg,
  CardImg,
  CardInfo,
  GridContainer,
  CardTitle,
  CardRate,
} from './HomePage.styled';
import noPoster from '../../imgages/images.jpg';

export default function HomePage(movie) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies()
      .then(response => response.data)
      .then(response => setMovies(response.results));
  }, []);

  return (
    <GridContainer>
      <GridList>
        {movies.map(item => (
          <GalleryCard key={item.id}>
            <Link to={`/movies/${item.id}`}>
              <GalleryImg>
                <CardImg
                  src={
                    item.poster_path
                      ? `https://image.tmdb.org/t/p/w500/${item.poster_path}`
                      : noPoster
                  }
                />
              </GalleryImg>
              <CardInfo>
                <CardTitle>{item.title}</CardTitle>
                <CardRate>{item.vote_average}</CardRate>
              </CardInfo>
            </Link>
          </GalleryCard>
        ))}
      </GridList>
    </GridContainer>
  );
}

HomePage.propTypes = {
  movie: PropTypes.object,
};
