import React, { useContext, useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { VscSearch } from 'react-icons/vsc';
import useDebounce from '../../../hooks/useDebounce';
import { SearchContext } from '../../../context/Search';
import { searchMovie } from '../../../api';

import '../../../styles/components/Layout/SearchBox.styl';

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [, setSearchResults] = useContext(SearchContext);
  const debouncedSearchTerm = useDebounce(searchTerm, 200);
  const location = useLocation();
  const history = useHistory();

  const fetchSearchResults = async () => {
    const results = await searchMovie(searchTerm);
    return setSearchResults(results);
  };

  useEffect(() => {
    if (debouncedSearchTerm) {
      fetchSearchResults(debouncedSearchTerm);
    } else {
      setSearchResults([]);
    }
  }, [debouncedSearchTerm]);

  const handleOnChange = ({ target: { value } }) => {
    if (!location.pathname.includes('/search')) {
      history.push('/search');
    }

    setSearchTerm(value);
  };

  return (
    <section className="search-box container">
      <input
        type="text"
        placeholder="Find your favorite movie"
        onChange={handleOnChange}
      />
      <VscSearch size={20} />
    </section>
  );
};

SearchBox.propTypes = {};

export default SearchBox;
