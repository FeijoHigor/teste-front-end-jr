import { useState } from 'react';
import ProductModal from '../ProductModal/ProductModal';

import './Product.scss'

function Product({ productData: product, styleFirst }) {

    const [openModal, setOpenModal] = useState(false)
    
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

    const formatPrice = (value) => {
        const commaValue = value.replace('.', ',')
        if(value.length > 6) {
            return commaValue.substr(0, commaValue.length - 6) + '.' + commaValue.substr(commaValue.length - 6)
        }else {
            return commaValue
        }
    }

    const price = correctPrice(product.price)
    const formatedPrice = formatPrice(price)

    const totalPrice = formatPrice((Number(price) * (30/100) + Number(price)).toFixed(2))

    const handleModal = () => {
        setOpenModal(!openModal)
        if(openModal == false) {
            document.body.style.overflow = 'hidden'
        }else {
            document.body.style.overflow = 'auto'
        }
    }

    return (
        <>
            <ProductModal productData={product} formatedPrice={formatedPrice} isOpen={openModal} setModalOpen={handleModal}/>
            <li className="product-card" title={product.productName} style={{marginLeft: styleFirst}} onClick={handleModal}>
                <div className='product-card-content'>
                    <div className='product-img'>
                        <img src={product.photo} alt={product.productName} />
                    </div>
                    <div className='product-name'>{product.productName}</div>
                    <div className="product-price">
                        <span className='product-price-off'>R$ {totalPrice}</span> <br />
                        <span className='product-price-text'>R$ {formatedPrice}</span> <br />
                        <span className="product-price-parcel">ou em até 2x de R$ {formatedPrice} sem juros</span> <br />
                        <span className="product-transport">Frete grátis</span><br />
                        <a className="product-buy-btn">COMPRAR</a>
                    </div>
                </div>
            </li>
        </> 
    )
}

export default Product