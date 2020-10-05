import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SearchContext } from '../context/Search';
import { SortContext } from '../context/Sort';
import MovieList from '../components/common/MovieList';
import SortingSelection from '../components/common/SortingSelection';

const Search = () => {
  const [searchResults, setSearchResults] = useContext(SearchContext);
  const [sortedBy, setSortedBy] = useContext(SortContext);

  const handleSortingChange = value => {
    const sortedResult = [...searchResults].sort((current, prev) => {
      const currentValue = current[value]
        ? current[value].toString().toUpperCase()
        : '';
      const prevValue = prev[value] ? prev[value].toString().toUpperCase() : '';

      if (value === 'voteAverage' || value === 'releaseYear') {
        return currentValue > prevValue ? -1 : 1;
      }

      return currentValue > prevValue ? 1 : -1;
    });

    setSortedBy(value);
    return setSearchResults(sortedResult);
  };

  return (
    <section className="Search">
      {searchResults && searchResults.length ? (
        <>
          <SortingSelection value={sortedBy} onChange={handleSortingChange} />
          <MovieList movieList={searchResults} title="Search Results" grid />
        </>
      ) : (
        <div className="Search--empty centered">
          <p>
            We did not find a movie that matches or there is nothing to search.
            Try with another word or start typing ;)
          </p>
          <Link to="/">Go back to Search</Link>
        </div>
      )}
    </section>
  );
};

Search.propTypes = {};

export default Search;
