import React from 'react'
import './Cart.css'

export function Cart({ allProducts, total, headerRef }) {
  return (
    <div className='checkout-container'>
      <h2 className='checkout-container-title'>Checkout</h2>
      <div className='checkout-products'>
        {allProducts.map(product => (
          <div key={product.id} className='checkout-product'>
            <span className='checkout-quantity'>{product.quantity}</span>
            <p className='title-product-checkout'>{product.title}</p>
            <p className='price-product-checkout'>${product.price * product.quantity}</p>
            <img className='image-product-checkout' src={product.thumbnail} alt={product.title} />
          </div>
        ))}
      </div>
      <div className='checkout-total'>
        <p>Total: ${total}</p>
      </div>
      <div ref={headerRef}></div>
    </div>
  );
}

