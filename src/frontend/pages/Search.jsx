import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SearchContext } from '../context/Search';
import MovieList from '../components/common/MovieList';

const Home = () => {
  const [searchResults] = useContext(SearchContext);

  return (
    <section className="Search">
      {searchResults && searchResults.length ? (
        <MovieList movieList={searchResults} title="Search Results" grid />
      ) : (
        <div className="Search--empty">
          <p>
            We did not find a movie that matches or there is nothing to search.
            Try with another word or start typing ;)
          </p>
          <Link to="/">Go back to Home</Link>
        </div>
      )}
    </section>
  );
};

Home.propTypes = {};

export default Home;
