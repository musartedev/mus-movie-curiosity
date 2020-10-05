import React, { useContext, useState, useEffect } from 'react';
import { VscSearch } from 'react-icons/vsc';
import useDebounce from '../../../hooks/useDebounce';
import { SearchContext } from '../../../context/Search';
import { searchMovie } from '../../../api';

import '../../../styles/components/Layout/SearchBox.styl';

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [, setSearchResults] = useContext(SearchContext);
  const debouncedSearchTerm = useDebounce(searchTerm, 200);

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
