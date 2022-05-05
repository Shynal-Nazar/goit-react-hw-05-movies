import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import ContentPage from 'layout/Content';
import Loader from './Spinner/Loader';

const HomePage = lazy(() => import('../page/homePage/HomePage'));
const Movies = lazy(() => import('../page/SearcMovies/SearcMovies'));
const MovieAbout = lazy(() => import('../page/moviesAbout/MovieAbout'));
const Cast = lazy(() => import('../page/cast/Cast'));
const Reviews = lazy(() => import('../page/Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <ContentPage />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route index element={<HomePage />}></Route>
          <Route path="movies" exact element={<Movies />} />
          <Route path="movies/:moviesId" element={<MovieAbout />}>
            <Route
              path="movies/:moviesId/reviews"
              element={<Reviews />}
            ></Route>
            <Route path="movies/:moviesId/cast" element={<Cast />}></Route>
          </Route>
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </>
  );
};
