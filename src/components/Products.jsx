import './Products.css'
import Popup from "./Popup";
import React, { useState } from 'react'

export function Products ({ products }) {
    const [showModal, setShowModal] = useState(false);
    const [selectedProductImages, setSelectedProductImages] = useState('');
    const [selectedProductTitles, setSelectedProductTitles] = useState('');
    const [selectedProductPrices, setSelectedProductPrices] = useState('');
    const [selectedProductDescription, setSelectedProductDescription] = useState('');

    const onAddProduct = () => {
        console.log("add")
    }

    const ShowModal = (product) => {
        setSelectedProductImages(product.images);
        setSelectedProductTitles(product.title);
        setSelectedProductPrices(product.price);
        setSelectedProductDescription(product.description);

        setShowModal(true);
      };

    return (
        <main className='products'>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <img 
                        src={product.thumbnail} 
                        alt={product.title}
                        onClick={() => ShowModal(product)}
                        />
                        <div>
                            <strong>{product.title} ${product.price}</strong>
                        </div>
                        <div>
                            <button onClick={() => onAddProduct()}>
                                Add to cart
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            <Popup 
            showFlag={showModal} 
            setShowModal={setShowModal}
            productImages={selectedProductImages}
            productTitles={selectedProductTitles}
            productPrices={selectedProductPrices}
            productDescription={selectedProductDescription}
            />
        </main>
    )
}