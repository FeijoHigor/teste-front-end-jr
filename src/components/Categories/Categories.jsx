import './Categories.scss'

import tecnologiaImg from '../../images/categoriesImages/monitor.png'
import supermercadoImg from '../../images/categoriesImages/supermercado.png'
import bebidasImg from '../../images/categoriesImages/whiskey.png'
import ferramentasImg from '../../images/categoriesImages/ferramentas.png'
import saudeImg from '../../images/categoriesImages/saude.png'
import esporteImg from '../../images/categoriesImages/esporte.png'
import modaImg from '../../images/categoriesImages/moda.png'

const allCategories = [
    {categorieName: 'Tecnologia', img: tecnologiaImg, selected: true},
    {categorieName: 'Supermercado', img: supermercadoImg},
    {categorieName: 'Bebidas', img: bebidasImg},
    {categorieName: 'Ferramentas', img: ferramentasImg},
    {categorieName: 'Saúde', img: saudeImg},
    {categorieName: 'Esportes e Fitness', img: esporteImg},
    {categorieName: 'Moda', img: modaImg},
]

function Categorie(props) {
    return (
        <li className={`categorie-card ${props.selected == true ? 'selected' : ''}`}>
           <div>
                <img src={props.img} alt={props.name} />
           </div>
            <p>{props.name}</p>
        </li>
    )
}

function Categories(props) {
    return (
        <ul className="categories">
            {allCategories.map((e, i) => <Categorie name={e.categorieName} img={e.img} selected={e.selected} />)}
        </ul>  
    )
}

export default Categories