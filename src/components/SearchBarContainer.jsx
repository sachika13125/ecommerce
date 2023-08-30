import React from 'react'
import { useState } from 'react';

import {FaSearch} from 'react-icons/fa';
import './SearchBarContainer.css';


export const SearchBarContainer = ({ products }) => {
    const [results, setResults] = useState([]);
    const [input, setInput] = useState('');

    const handleChange = (value) => {
      setInput(value);
      const results = products.filter((product) => {
          return (
              value && 
              product && 
              product.title && 
              product.title.toLowerCase().includes(value.toLowerCase())
          );
      });
      setResults(results);
  };

  return (
    <>
        <div className='search-bar-container'>
            <div className='input-wrapper'>
                <FaSearch id='search-icon' />
                <input placeholder='Type to search...' value={input} onChange={(e) => handleChange(e.target.value)} />
            </div>
        </div>

        <div className='results-list'>
        {
          results.map((result) => {
            return (
              <div className='search-result' onClick={(e) => alert(`You clicked on ${result}`)}>
                {result.title}
              </div>
            )
          })
        }
    </div>    </>
  )
}
