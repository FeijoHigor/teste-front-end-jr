import ProductsList from './ProductsList.jsx'
import RelatedProductsHeader from './RealatedProductHeader.jsx'


function RelatedProducts(props) {
    return (
        <section style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <RelatedProductsHeader options={props.options} />
            <ProductsList />
        </section>
    )
}

export default RelatedProducts