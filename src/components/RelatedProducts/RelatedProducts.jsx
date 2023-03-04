import ProductsList from './ProductsList.jsx'
import RelatedProductsHeader from './RealatedProductHeader.jsx'


function RelatedProducts(props) {
    return (
        <section>
            <RelatedProductsHeader options={props.options} />
            <ProductsList />
        </section>
    )
}

export default RelatedProducts