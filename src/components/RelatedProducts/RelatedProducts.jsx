import { useState } from 'react'
import ProductsList from './ProductsList.jsx'
import RelatedProductsHeader from './RealatedProductHeader.jsx'

const relatedProductsCategories = [
    {categorieName: "CELULAR", categorieProductsList: 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json'},
    {categorieName: "ACESSÓRIOS", categorieProductsList: false},
    {categorieName: "TABLETS", categorieProductsList: false},
    {categorieName: "NOTEBOOKS", categorieProductsList: false},
    {categorieName: "TVS", categorieProductsList: false},
    {categorieName: "VER TODOS", categorieProductsList: 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json'},
]

function RelatedProducts(props) {

    const [selectedCategorie, setSelectedCategorie] = useState(0)

    return (
        <section style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <RelatedProductsHeader options={props.options} changeCategorie={setSelectedCategorie} selectedCategorie={selectedCategorie} categories={relatedProductsCategories} />
            <ProductsList productsListFetch={props.options ? relatedProductsCategories[selectedCategorie].categorieProductsList : relatedProductsCategories[5].categorieProductsList} />
        </section>
    )
}

export default RelatedProducts