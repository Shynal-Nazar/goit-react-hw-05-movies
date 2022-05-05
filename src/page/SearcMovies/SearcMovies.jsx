import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getMovieByQuery } from 'Api/Api';
import { useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import noPoster from '../../imgages/images.jpg';
import {
  GridList,
  GalleryCard,
  GalleryImg,
  CardImg,
  CardInfo,
  GridContainer,
  CardTitle,
  CardRate,
} from 'page/homePage/HomePage.styled';
import { Form, Input, Button } from './SearcMovies.styled';
import { Link } from 'layout/Content.styled';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [status, setStatus] = useState('idle');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParam, setSearchParam] = useSearchParams();
  const location = useLocation();

  const getInputValue = e => {
    setInputValue(e.currentTarget.value.toLowerCase());
  };

  useEffect(() => {
    if (searchParam.has('query')) {
      setSearchQuery(searchParam.get('query'));
    }
    return () => {
      setMovies([]);
    };
  }, [searchParam]);

  useEffect(() => {
    if (!searchQuery || searchQuery.match(/^[ ]+$/)) {
      return;
    }
    setStatus('pending');
    getMovieByQuery(searchQuery).then(response => {
      if (response.length === 0) {
        Notify.failure('Write the correct Movie name,please', {
          position: 'center-center',
          fontSize: '24px',
          timeout: 2500,
          width: '30%',
        });
        return;
      } else {
        setStatus('resolved');
        setMovies(response);
      }
    });
  }, [searchQuery]);

  const handleSubmit = e => {
    e.preventDefault();
    setSearchQuery(inputValue);
    if (inputValue.trim() === '') {
      Notify.failure('Write the correct Movie name,please', {
        position: 'center-center',
        fontSize: '24px',
        timeout: 2500,
        width: '30%',
      });
      return;
    }

    setSearchParam({ query: inputValue });
    setInputValue('');
  };

  return (
    <>
      <Form>
        <Input
          placeholder="Search movie"
          type="text"
          value={inputValue}
          onChange={getInputValue}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        />

        <Button type="submit" onClick={handleSubmit}>
          Search
        </Button>
      </Form>
      <GridContainer>
        {status === 'resolved' && (
          <GridList>
            {movies.map(({ id, poster_path, title, vote_average }) => (
              <GalleryCard key={id}>
                <Link
                  to={{
                    pathname: `/movies/${id}`,
                  }}
                  state={{ from: location }}
                >
                  <GalleryImg>
                    <CardImg
                      src={
                        poster_path
                          ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                          : noPoster
                      }
                    />
                  </GalleryImg>
                  <CardInfo>
                    <CardTitle>{title}</CardTitle>
                    <CardRate>{vote_average}</CardRate>
                  </CardInfo>
                </Link>
              </GalleryCard>
            ))}
          </GridList>
        )}
      </GridContainer>
    </>
  );
}
