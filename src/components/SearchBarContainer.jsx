import React from 'react'
import { useState } from 'react';

import { SearchBar } from './SearchBar'
import { SearchResultList } from './SearchResultsList';


export const SearchBarContainer = ({ products }) => {
    const [results, setResults] = useState([]);

  return (
    <>
        <SearchBar setResults={setResults} products={products} />
        <SearchResultList results={results} />
    </>
  )
}
