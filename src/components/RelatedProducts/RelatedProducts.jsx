import RelatedProductsHeader from './RealatedProductHeader.jsx'


function RelatedProducts(props) {
    return (
        <section>
            <RelatedProductsHeader options={props.options} />
        </section>
    )
}

export default RelatedProducts