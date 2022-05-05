import { Outlet, useParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieId } from 'Api/Api';
import GoBackBtn from 'components/btnGoBack/BackBtn';
import {
  Wrapper,
  FirstTitle,
  Img,
  WrapperInfo,
  SecondTitle,
  ThirdTitle,
  LinkDetail,
  MovieInfo,
  ImgWrapper,
} from './MovieAbout.styled';

export default function MovieAbout() {
  const { moviesId } = useParams();
  const [movie, setMovie] = useState(null);
  const [status, setStatus] = useState('idle');

  let location = useLocation();
  const locationFrom = location?.state?.from ?? '/';

  useEffect(() => {
    getMovieId(moviesId)
      .then(response => response.data)
      .then(response => {
        setMovie(response);
        setStatus('pending');
      });
  }, [moviesId]);

  return (
    <>
      <GoBackBtn data={locationFrom} />
      {status === 'pending' && (
        <Wrapper>
          <ImgWrapper>
            <Img
              alt="11"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            />
            <WrapperInfo>
              <FirstTitle>
                {movie.original_title} ({movie.release_date.slice(0, 4)})
              </FirstTitle>
              <p>User Score: {movie.vote_average}</p>
              <SecondTitle>Overview</SecondTitle>
              <p>{movie.overview}</p>
              <ThirdTitle>Genres</ThirdTitle>
              <p>{movie.genres.map(gener => gener.name + ' ')}</p>
            </WrapperInfo>
          </ImgWrapper>
          <MovieInfo>
            <LinkDetail
              to={`movies/${moviesId}/reviews`}
              state={{ from: locationFrom }}
            >
              Reviews
            </LinkDetail>
            <LinkDetail
              to={`movies/${moviesId}/cast`}
              state={{ from: locationFrom }}
            >
              Cast
            </LinkDetail>
            <Outlet />
          </MovieInfo>
        </Wrapper>
      )}
    </>
  );
}
