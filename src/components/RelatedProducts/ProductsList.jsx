import { useState, useRef } from "react"

import useRequest from "../../hooks/useRequest"
import Product from "./Product"

import './ProductsList.scss'

function ProductsList(props) {
    const { data: products, isFetching: loading } = useRequest('https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json')
    const productList = useRef(null)

    const moveList = (side) => {
        if(side == 'left') {
            productList.current.scrollLeft -= 675.2
        }else if(side == 'right') {
            productList.current.scrollLeft += 675.2
        }
    }

    return (
        <div style={{position: 'relative'}}>
            <button className={`arrow left ${7 <= 4 ? 'arrow-desactive' : ''}`} onClick={() => moveList('left')} >
                <svg width="20" height="34" viewBox="0 0 20 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 3.03939L16.9666 0L0 17L16.9666 34L20 30.9606L6.06684 17L20 3.03939Z"/>
                </svg>
            </button>
            <ul ref={productList} className={`products-list`}>
                {loading && <div>carregando...</div>}
                {products?.success ? products?.products.map((e, i) => 
                        <Product key={(i)} productData={e} styleFirst={i == 0 ? 0 : 66.6} />
                    ) : (
                    <div>Erro ao carregar os produtos</div>
                )}
            </ul>
            <button className={`arrow right ${6 >= 10 ? 'arrow-desactive' : ''}`} onClick={() => moveList('right')}>
                <svg width="20" height="34" viewBox="0 0 20 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 3.03939L16.9666 0L0 17L16.9666 34L20 30.9606L6.06684 17L20 3.03939Z"/>
                </svg>
            </button>
        </div>
    )
}

export default ProductsList