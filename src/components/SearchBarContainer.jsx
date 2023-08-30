import React from 'react'
import { useState } from 'react';
import Popup from "./Popup.jsx";
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

  const [showModal, setShowModal] = useState(false);
    const [selectedProductImages, setSelectedProductImages] = useState('');
    const [selectedProductTitles, setSelectedProductTitles] = useState('');
    const [selectedProductPrices, setSelectedProductPrices] = useState('');
    const [selectedProductDescription, setSelectedProductDescription] = useState('');

  const ShowModal = (results) => {
    setSelectedProductImages(results.images);
    setSelectedProductTitles(results.title);
    setSelectedProductPrices(results.price);
    setSelectedProductDescription(results.description);

    setShowModal(true);
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
              <div className='search-result' key={result.id} onClick={() => ShowModal(result)}>
                {result.title}
              </div>
            )
          })
        }
    </div> 
    <Popup 
            showFlag={showModal} 
            setShowModal={setShowModal}
            productImages={selectedProductImages}
            productTitles={selectedProductTitles}
            productPrices={selectedProductPrices}
            productDescription={selectedProductDescription}
            />
    </>
  )
}
