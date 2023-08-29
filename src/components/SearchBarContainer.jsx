import React from 'react'
import { useState } from 'react';

import { SearchBar } from './SearchBar'
import { SearchResultList } from './SearchResultsList';


export const SearchBarContainer = () => {
    const [results, setResults] = useState([]);


  return (
    <>
        <SearchBar setResults={setResults} />
    <SearchResultList results={results} />
    </>
  )
}
