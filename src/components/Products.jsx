import './Products.css'

export function Products ({ products }) {

    const onAddProduct = () => {
        console.log("add")
    }

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
                            <button onClick={() => onAddProduct()}>
                                Add to cart
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    )
}