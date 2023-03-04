import './HeaderTop.scss'

import shildCheck from '../../images/headerImages/icons/ShieldCheck.svg'
import creditCardImg from '../../images/headerImages/icons/CreditCard.svg'
import truck from '../../images/headerImages/icons/Truck.svg'

function HeaderTop(props) {
    return (
        <div>
            <ul className="header-top-list">
                <li>
                    <img src={shildCheck} alt="Selo de segurança" />
                    Compra &nbsp; <span className="colored-text">100% segura</span>
                </li>
                <li>
                    <img src={truck} alt="Caminhão" />
                    <span className="colored-text">Frete grátis</span> &nbsp; acima de R$200
                </li>
                <li>
                    <img src={creditCardImg} alt="Cartão" />
                   <span className="colored-text">Parcele</span> &nbsp; suas compras
                </li>
            </ul>
        </div>
    )
}

export default HeaderTop