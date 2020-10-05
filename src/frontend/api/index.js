import axios from 'axios';
import { handleFailure, handleSuccess, parseMovies } from './utils';

const API_KEY = process.env.TMDB_API_KEY;
const API_BASE_URL = process.env.TMDB_API_URL;

const tmbdApi = axios.create({
  baseURL: API_BASE_URL,
});

/**
 * Returns the top 20 of popular movies
 */
export const getPopularMovies = async () => {
  try {
    const { data } = await tmbdApi.get('/movie/popular', {
      params: { api_key: API_KEY },
    });
    return handleSuccess(parseMovies(data.results));
  } catch (err) {
    return handleFailure(err);
  }
};

/**
 * Return top 20 of Now Playing movies
 */
export const getNowPlayingMovies = async () => {
  try {
    const { data } = await tmbdApi.get('/movie/now_playing', {
      params: { api_key: API_KEY },
    });
    return handleSuccess(parseMovies(data.results));
  } catch (err) {
    return handleFailure(err);
  }
};

/**
 * Returns movies that match with the searchTerm
 * @param {String} searchTerm
 */
export const searchMovie = async searchTerm => {
  try {
    const { data } = await tmbdApi.get('/search/movie', {
      params: { api_key: API_KEY, query: searchTerm },
    });
    return handleSuccess(parseMovies(data.results));
  } catch (err) {
    return handleFailure(err);
  }
};
