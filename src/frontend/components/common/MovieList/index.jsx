import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

import '../../../styles/components/common/MovieList/index.styl';

const MovieList = ({ title, movieList, grid }) => {
  return (
    <section className="Movie-list">
      <h2>{title}</h2>
      <div
        className={`Movie-list__container ${
        grid ? 'Movie-list__container--grid' : ''
        } `}
      >
        {movieList.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

MovieList.propTypes = {
  movieList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
    })
  ),
  title: PropTypes.string.isRequired,
  grid: PropTypes.bool,
};

MovieList.defaultProps = {
  movieList: [],
  grid: false,
};

export default MovieList;
