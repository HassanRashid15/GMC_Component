import React, { useState } from 'react';
import PropTypes from 'prop-types';

const FilterArea = ({ options1 = [], options2 = [], options3 = [], onApplyFilters }) => {
  const [filter1, setFilter1] = useState('');
  const [filter2, setFilter2] = useState('');
  const [filter3, setFilter3] = useState('');

  const handleApplyFilters = () => {
    const filters = { filter1, filter2, filter3 };
    console.log('Filters applied:', filters);
    onApplyFilters(filters);
  };

  const handleResetFilters = () => {
    setFilter1('');
    setFilter2('');
    setFilter3('');
  };

  return (
    <div className='filter-box-alignment-box'>
    <div className="p-4 bg-white rounded filter-box-custom shadow-md">
      <div className="flex flex-col md:flex-row md:space-x-4 items-center">
        <select
          value={filter1}
          onChange={(e) => setFilter1(e.target.value)}
          className="border border-gray-300 p-2 flex-1 mb-2 md:mb-0"
        >
          <option value="">Any</option>
          {options1.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <select
          value={filter2}
          onChange={(e) => setFilter2(e.target.value)}
          className="border border-gray-300 p-2 flex-1 mb-2 md:mb-0"
        >
          <option value="">Any</option>
          {options2.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <select
          value={filter3}
          onChange={(e) => setFilter3(e.target.value)}
          className="border border-gray-300 p-2 flex-1 mb-2 md:mb-0"
        >
          <option value="">Any</option>
          {options3.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <button
          onClick={handleApplyFilters}
          className=" text-white rounded p-2 flex-none filter-button-custom"
        >
          Search Property
        </button>
      </div>
    </div>
    </div>
  );
};

FilterArea.propTypes = {
  options1: PropTypes.array,
  options2: PropTypes.array,
  options3: PropTypes.array,
  onApplyFilters: PropTypes.func.isRequired,
};

export default FilterArea;
