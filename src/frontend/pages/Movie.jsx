import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { AiFillStar } from 'react-icons/ai';
import { getMovie } from '../api';

import '../styles/pages/Movie.styl';

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchMovie = async () => {
      const movieResponse = await getMovie(id);
      setMovie(movieResponse);
    };

    fetchMovie();
  }, [id]);

  const { title, overview, posterUrl, voteAverage, releaseYear } = movie;

  return (
    <div
      className="Movie container"
      itemScope
      itemType="http://schema.org/Movie"
    >
      <figure className="Movie__poster">
        <img src={posterUrl} alt={title} />
      </figure>
      <div className="Movie__main-info">
        <h1 itemProp="name">{`${title} (${releaseYear})`}</h1>
        <span>{releaseYear}</span>
        <p className="Movie__rank">
          <AiFillStar size={14} />
          {voteAverage}
        </p>
        <p itemProp="abstract">{overview}</p>
      </div>
    </div>
  );
};

export default Movie;
