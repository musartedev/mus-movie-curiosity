/* eslint-disable camelcase */
const IMG_BASE_URL = process.env.TMDB_IMG_BASE_URL;

/**
 * Handle successful API response
 * @param {Object} data
 */
export const handleSuccess = data => data;

/**
 * Handle failure API response
 *
 * TODO: Show error to the user or try again
 *
 * @param {Object} err
 */
export const handleFailure = err => console.log(err);

/**
 * Returns the full path of a response image.
 * @param {String} path Relative path of the image.
 */
export const getImgUrl = path => `${IMG_BASE_URL}${path}`;

/**
 * Returns the release year from a full date string
 * @param {String} releaseDate Eg: 2020-20-01
 */
export const getYearFromReleaseDate = (releaseDate='')=> releaseDate.split('-')[0]

/**
 * Formats a response movie object
 * @param {Object} movie
 */
export const parseMovie = ({
  id,
  poster_path,
  original_title,
  overview,
  release_date,
  vote_average,
}) => ({
  id,
  posterUrl: getImgUrl(poster_path),
  title: original_title,
  overview,
  releaseYear: getYearFromReleaseDate(release_date),
  voteAverage: vote_average.toFixed(1),
});

/**
 * Formats a response movie list
 * @param {Array} movies
 */
export const parseMovies = (movies = []) =>
  movies.map(movie => parseMovie(movie));
