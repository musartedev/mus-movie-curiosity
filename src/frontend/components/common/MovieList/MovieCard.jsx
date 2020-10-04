/* eslint-disable camelcase */
import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import PropTypes from 'prop-types';

import '../../../styles/components/common/MovieList/MovieCard.styl';

// TODO: Change snake-case to camelCase parsing the response
const MovieCard = ({
  movie: { title, overview, poster_path, vote_average },
}) => {
  return (
    <div className="Movie">
      <figure>
        <img src={poster_path} alt={title} />
      </figure>
      <div className="Movie__rank">
        <AiFillStar size={14} />
        <span>{vote_average}</span>
      </div>
      <div className="Movie__info">
        <h3>{title}</h3>
        <p className="Movie__overview">{overview}</p>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    vote_average: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
