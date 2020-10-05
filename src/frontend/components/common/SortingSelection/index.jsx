import React from 'react';
import PropTypes from 'prop-types';

import '../../../styles/components/common/SortingSelection.styl';

const SortingSelection = ({ value, onChange }) => {
  const handleOnChange = e => onChange(e.target.value);

  return (
    <div className="Sorting-selection">
      <label htmlFor="Sorting-selection">
        Sort Results By:
        <div>
          <select
            name="Sorting--selection"
            id="Sorting-selection"
            value={value}
            onChange={handleOnChange}
          >
            <option defaultChecked>Default</option>
            <option value="title">Title</option>
            <option value="releaseYear">Latest</option>
            <option value="voteAverage">Most Ranked</option>
          </select>
        </div>
      </label>
    </div>
  );
};

SortingSelection.propTypes = {
  value: PropTypes.oneOf(['default', 'title', 'releaseYear', 'voteAverage']),
  onChange: PropTypes.func.isRequired,
};

SortingSelection.defaultProps = {
  value: 'default',
};

export default SortingSelection;
