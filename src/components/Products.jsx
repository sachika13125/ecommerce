import './Products.css'
import Popup from "./Popup.jsx";
import React, { useState, useEffect } from 'react'
import { Filters } from './Filters.jsx'
// import './Header.css'


export function Products ({ 
    allProducts, 
    setAllProducts, 
    total, 
    setTotal,
    countProducts,
    setCountProducts,
    changeFilters
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


    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 0,
        search: ''
    });

    const filterProducts = (products) => {
    return products.filter(product => {
        return (
        product.price >= filters.minPrice && 
        (
            filters.category === 'all' ||
            product.category === filters.category 
        ) &&
        (
            (product.title.toLowerCase().includes(filters.search.toLowerCase()))
        )
        )
    })
    }

    const filteredProducts = filterProducts(products);
    


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
    };

    const openModal = (product) => {
        setSelectedProduct(product);
        setShowModal(true);
    };
    




    return (
        
        <main className='products py-4'>
            <Filters onChange={changeFilters}
            changeFilters={setFilters} 
            filteredProducts={filteredProducts}
            />            
            <ul className='py-4'>
                {filteredProducts.map(product => (
                    <li key={product.id}>
                        <img 
                        src={product.thumbnail} 
                        alt={product.title}
                        onClick={() => openModal(product)}
                        />
                        <div className='text-left text-xl py-4 px-5'>
                            {product.title}
                        </div>
                        <div className='flex justify-between items-center py-4 px-5'>
                            <span className='text-left text-2xl font-bold'>${product.price}</span>
                            <button className='addcart-btn' onClick={() => onAddProduct(product)}>
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