import React, { useEffect, useState } from 'react';
import MovieList from '../components/common/MovieList';
import { getNowPlayingMovies, getPopularMovies } from '../api';

const Home = () => {
  const [nowPlayingList, setNowPlatingList] = useState([]);
  const [popularList, setPopularList] = useState([]);

  useEffect(() => {
    const fetchFeed = async () => {
      const nowPlayingPromise = getNowPlayingMovies();
      const popularPromise = getPopularMovies();

      const [nowPlaying, popular] = await Promise.all([
        nowPlayingPromise,
        popularPromise,
      ]);

      setNowPlatingList(nowPlaying);
      setPopularList(popular);
    };

    fetchFeed();
  }, []);

  return (
    <div>
      <MovieList title="Now Playing" movieList={nowPlayingList} />
      <MovieList title="Trending" movieList={popularList} />
    </div>
  );
};

Home.propTypes = {};

export default Home;
