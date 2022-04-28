import axios from 'axios';

const KEY = 'd944f9a3c912a029f28672e84740d9ce';
const BASE_URL = 'https://api.themoviedb.org/3/';

export async function getTrendingMovies() {
  try {
    const response = await axios.get(
      `${BASE_URL}trending/movie/day?api_key=${KEY}`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function getMovieId(id) {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${id}?api_key=${KEY}&language=en-US`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function getMovieReview(id) {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function getMovieCast(id) {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${id}/credits?api_key=${KEY}&language=en-US&page=1`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function getMovieByQuery(query) {
  try {
    const response = await axios.get(
      `${BASE_URL}search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    );
    const data = response.data;
    const results = data.results;
    return results;
  } catch (error) {
    console.error(error);
  }
}
