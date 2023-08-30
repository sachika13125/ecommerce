import './Products.css'
import Popup from "./Popup";
import React, { useState, useEffect } from 'react'

export function Products ({ 
    allProducts, 
    setAllProducts, 
    total, 
    setTotal,
    countProducts,
    setCountProducts, 
}) {

    const [products, setProducts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    
    
    const fetchProducts = async () => {
        try {
          const response = await fetch('http://localhost:5000/api/products'); 
          const responseData = await response.json();
          const productsData = responseData.products;
          setProducts(productsData);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };


    
    useEffect(() => {
        fetchProducts();
    }, []);


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

    const openModal = (product) => {
        setSelectedProduct(product);
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
                        onClick={() => openModal(product)}
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
            product={selectedProduct}
            />
        </main>
    )
}