import React, { useState } from 'react';

const SearchProducts = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleSearchChange = (event) => {
      const newSearchTerm = event.target.value;
      setSearchTerm(newSearchTerm);
      onSearch(newSearchTerm)
    };
  
    return (
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
    );
  };
  

export default SearchProducts;
