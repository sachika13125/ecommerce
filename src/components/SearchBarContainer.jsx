import React, { useState } from 'react'
import Popup from "./Popup";
import { FaSearch } from 'react-icons/fa';
import './SearchBarContainer.css';


export const SearchBarContainer = ({ products }) => {
  const [results, setResults] = useState([]);
  const [input, setInput] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);




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


  const openModal = (product) => {
    setSelectedProduct(product);
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
          results.map((product) => {
            return (
              <div className='search-result' key={product.id} onClick={() => openModal(product)}>
                {product.title}
              </div>
            )
          })
        }
      </div>
      <Popup
        showFlag={showModal}
        setShowModal={setShowModal}
        product={selectedProduct}
      />
    </>
  )
}
