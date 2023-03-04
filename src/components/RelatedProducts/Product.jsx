import './Product.scss'

function Product({ productData: product }) {
    return (
        <li className="product-card">
            <div className='product-card-content'>
                <div className='product-img'>
                    <img src={product.photo} alt={product.productName} />
                </div>
                <p>{product.productName}</p>
                <div className="product-price">
                    <span>R${product.price}</span> <br />
                    <span className="product-price-parcel">ou em até 2x de {product.price / 2} sem juros</span> <br />
                    <span className="product-transport">Frete grátis</span><br />
                    <a className="product-buy-btn">COMPRAR</a>
                </div>
            </div>
        </li>
    )
}

export default Product