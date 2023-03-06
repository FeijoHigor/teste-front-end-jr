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
                    {props.categories.map((e, i) => 
                        <li key={i} className={props.selectedCategorie == i ? `related-products-categories-selected` : ''} onClick={() => props.changeCategorie(i)}>
                            <a>
                                {e.categorieName}    
                            </a>
                        </li>)}
                </ul>
            ) : (
                <p className='related-products-categories-bottom-text'>Ver todos</p>
            )}
        </div>
    )
}

export default RealtedProductsHeader