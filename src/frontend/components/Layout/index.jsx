import React from 'react';
import Header from './Header';
import SearchBox from './SearchBox';
import MovieList from '../common/MovieList';
import Footer from './Footer';

import movieList from '../../constants/MovieData';

import '../../styles/components/Layout/index.styl';

const Layout = () => {
  return (
    <div className="Layout">
      <Header />
      <SearchBox />
      <div>
        <MovieList title="Now Playing" movieList={movieList} />
        <MovieList title="Trending" movieList={movieList} />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
