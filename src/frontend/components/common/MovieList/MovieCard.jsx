/* eslint-disable camelcase */
import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import PropTypes from 'prop-types';

import '../../../styles/components/common/MovieList/MovieCard.styl';

// TODO: Change snake-case to camelCase parsing the response
const MovieCard = ({
  movie: { posterUrl, title, overview, releaseYear, voteAverage },
}) => {
  return (
    <div className="Movie" role="link" tabIndex="0">
      <figure>
        <img src={posterUrl} alt={title} />
      </figure>
      <div className="Movie__rank">
        <AiFillStar size={14} />
        <span>{voteAverage}</span>
      </div>
      <div className="Movie__info">
        <h3>{`${title} (${releaseYear})`}</h3>
        <p className="Movie__overview">{overview}</p>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    posterUrl: PropTypes.string.isRequired,
    releaseYear: PropTypes.string.isRequired,
    voteAverage: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
