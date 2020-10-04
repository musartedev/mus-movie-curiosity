import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

import "../../../styles/components/common/MovieList/index.styl"

const List = ({ title, movieList }) => {
  return (
    <section className="Movie-list">
      <h2>{title}</h2>
      <div className="Movie-list__container">
        {movieList.map(movie => (
          <MovieCard movie={movie} />
        ))}
      </div>
    </section>
  );
};

List.propTypes = {
  movieList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
    })
  ),
  title: PropTypes.string.isRequired,
};

List.defaultProps = {
  movieList: [],
};

export default List;
