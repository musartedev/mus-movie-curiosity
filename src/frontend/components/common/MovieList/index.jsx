import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

import '../../../styles/components/common/MovieList/index.styl';

const MovieList = ({ title, movieList }) => {
  return (
    <section className="Movie-list">
      <h2>{title}</h2>
      <div className="Movie-list__container">
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
};

MovieList.defaultProps = {
  movieList: [],
};

export default MovieList;
