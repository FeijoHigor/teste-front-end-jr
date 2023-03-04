import BrandsCarousel from "./BrandsCarousel"

import './Brands.scss'

function Brands(props) {
    return (
        <div className="brands">
            <h2>Navegue por marcas</h2>
            <BrandsCarousel />
        </div>
    )
}

export default Brands