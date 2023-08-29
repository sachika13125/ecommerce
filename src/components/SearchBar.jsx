import React from 'react';
import { useState } from 'react';

import {FaSearch} from 'react-icons/fa';
import './SearchBar.css';

export const SearchBar = ({ setResults, products }) => {
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
        <div className='search-bar-container'>
            <div className='input-wrapper'>
                <FaSearch id='search-icon' />
                <input placeholder='Type to search...' value={input} onChange={(e) => handleChange(e.target.value)} />
            </div>
        </div>
    )
};
