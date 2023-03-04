import './Product.scss'

function Product({ productData: product, styleFirst }) {
    
    const correctPrice = (price) => {

        var newPrice;
        if(price.toString().length <= 4) {
            newPrice = Number(price.toString().substr(0, price.toString().length) + '.0' + price.toString().substr(price.toString().length)).toFixed(2)
        }else if(price.toString().length == 5) {
            newPrice = Number(price.toString().substr(0, price.toString().length - 1) + '.' + price.toString().substr(price.toString().length - 1)).toFixed(2)
        }else if(price.toString().length >= 6) {
            newPrice = Number(price.toString().substr(0, price.toString().length - 2) + '.' + price.toString().substr(price.toString().length - 2)).toFixed(2)
        }
        
        return newPrice
    }

    const price = correctPrice(product.price)
    const totalPrice = (Number(price) * (30/100) + Number(price)).toFixed(2)

    return (
        <li className="product-card" style={{marginLeft: styleFirst}} title={product.productName}>
            <div className='product-card-content'>
                <div className='product-img'>
                    <img src={product.photo} alt={product.productName} />
                </div>
                <div className='product-name'>{product.productName}</div>
                <div className="product-price">
                    <span className='product-price-off'>R$ {totalPrice.toString().replace('.', ',')}</span> <br />
                    <span className='product-price-text'>R$ {price.toString().replace('.', ',')}</span> <br />
                    <span className="product-price-parcel">ou em até 2x de R$ {price.toString().replace('.', ',')} sem juros</span> <br />
                    <span className="product-transport">Frete grátis</span><br />
                    <a className="product-buy-btn">COMPRAR</a>
                </div>
            </div>
        </li>
    )
}

export default Product