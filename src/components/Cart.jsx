import React from 'react';

export function Cart({ allProducts, total, headerRef }) {
  return (
    <div className='checkout-container'>
      <h2>Checkout</h2>
      <div className='checkout-products'>
        {allProducts.map(product => (
          <div key={product.id} className='checkout-product'>
            <p>{product.title}</p>
            <p>Quantity: {product.quantity}</p>
            <p>Total: ${product.price * product.quantity}</p>
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

