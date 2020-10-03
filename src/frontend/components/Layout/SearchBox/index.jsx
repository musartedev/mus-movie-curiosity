import React from 'react';
import { VscSearch } from 'react-icons/vsc';

import '../../../styles/components/Layout/SearchBox.styl';

const SearchBox = () => {
  return (
    <section className="search-box container">
      <input type="text" placeholder="Find your favorite movie" />
      <VscSearch size={20} />
    </section>
  );
};

SearchBox.propTypes = {};

export default SearchBox;
