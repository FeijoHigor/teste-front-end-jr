import useRequest from "../../hooks/useRequest"
import Product from "./Product"

import './ProductsList.scss'

function ProductsList(props) {
    const { data: products, isFetching: loading } = useRequest('https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json')

    return (
        <ul className="products-list">
            {loading && <div>carregando...</div>}
            {products?.success ? products?.products.map((e, i) => 
                    <Product key={(i)} productData={e} styleFirst={i == 0 ? 0 : 66.6} />
                ) : (
                <div>Erro ao carregar os produtos</div>
            )}
        </ul>
    )
}

export default ProductsList