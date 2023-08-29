import './Products.css'
import Popup from "./Popup";
import React, { useState } from 'react'


export function Products ({ 
    products, 
    allProducts, 
    setAllProducts, 
    countProducts, 
    setCountProducts,
    total, 
    setTotal }) {

    const [showModal, setShowModal] = useState(false);
    const [selectedProductImages, setSelectedProductImages] = useState('');
    const [selectedProductTitles, setSelectedProductTitles] = useState('');
    const [selectedProductPrices, setSelectedProductPrices] = useState('');
    const [selectedProductDescription, setSelectedProductDescription] = useState('');
    const onAddProduct = product => {

        if(allProducts.find(item => item.id === product.id)){

            const productsAddQuantity = allProducts.map(
                item => item.id === product.id 
                ? {...item, quantity: item.quantity +1} 
                : item)

            setTotal(total + product.price * product.quantity)
            setCountProducts(countProducts + product.quantity)
            return setAllProducts([...productsAddQuantity])
        }

        setTotal(total + product.price * product.quantity)
        setCountProducts(countProducts + product.quantity)
        setAllProducts([...allProducts, product])
    }
    console.log(allProducts)

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
                            <button onClick={() => onAddProduct(product)}>
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