import React from 'react';

import './SearchResultsList.css';
import { SearchResult } from './SearchResult';

export const SearchResultList = ({ results }) => {
  return (
    <div className='results-list'>
        {
          results.map((result) => {
            return (
              <SearchResult key={result.title} result={result} />
              // Change the data name
            )
          })
        }
    </div>
  )
};
