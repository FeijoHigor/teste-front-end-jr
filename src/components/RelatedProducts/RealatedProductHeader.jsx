import './RelatedProductsHeader.scss'

function RealtedProductsHeader(props) {
    return (
        <div className='related-products-header'>
            <div className='related-products-header-title'>
                <span className="related-products-title-line" />
                <h2>Produtos relacionados</h2>
                <span className="related-products-title-line" />
            </div>

            {props.options ? (
                <ul className="related-products-categories">
                    <li className='related-products-categories-selected'>
                        <a>
                            CELULAR    
                        </a>
                    </li>
                    <li>
                        <a>
                            ACESSÓRIOS    
                        </a>
                    </li>
                    <li>
                        <a>
                            TABLETS    
                        </a>
                    </li>
                    <li>
                        <a>
                            NOTEBOOKS    
                        </a>
                    </li>
                    <li>
                        <a>
                            TVS    
                        </a>
                    </li>
                    <li>
                        <a>
                            VER TODOS    
                        </a>
                    </li>
                </ul>
            ) : (
                <p className='related-products-categories-bottom-text'>Ver todos</p>
            )}
        </div>
    )
}

export default RealtedProductsHeader