import './Products.css'

export function Products ({ 
    products, 
    allProducts, 
    setAllProducts, 
    countProducts, 
    setCountProducts,
    total, 
    setTotal }) {

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

    return (
        <main className='products'>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <img src={product.thumbnail} alt={product.title} />
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
        </main>
    )
}