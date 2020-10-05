/* eslint-disable camelcase */
import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import PropTypes from 'prop-types';

import '../../../styles/components/common/MovieList/MovieCard.styl';

// TODO: Change snake-case to camelCase parsing the response
const MovieCard = ({
  movie: { id, posterUrl, title, overview, releaseYear, voteAverage },
}) => {
  return (
    <Link to={`/movie/${id}`}>
      <div
        className="Movie-card"
        role="link"
        tabIndex="0"
        itemScope
        itemType="http://schema.org/Movie"
      >
        <figure>
          <img src={posterUrl} alt={title} />
        </figure>
        <div className="Movie-card__rank">
          <AiFillStar size={14} />
          <span>{voteAverage}</span>
        </div>
        <div className="Movie-card__info">
          <h3 itemProp="name">{`${title} (${releaseYear})`}</h3>
          <p itemProp="abstract" className="Movie-card__overview">
            {overview}
          </p>
        </div>
      </div>
    </Link>
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
