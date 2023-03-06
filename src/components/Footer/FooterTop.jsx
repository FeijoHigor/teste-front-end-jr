import './FooterTop.scss'

import facebookLogo from '../../images/footer/facebook.svg'
import instagramLogo from '../../images/footer/instagram.svg'
import youtubeLogo from '../../images/footer/youtube.svg'

import visaLogo from '../../images/footer/paymentMethods/visa.svg'
import eloLogo from '../../images/footer/paymentMethods/elo.svg'
import aleloLogo from '../../images/footer/paymentMethods/alelo.svg'
import dinnersLogo from '../../images/footer/paymentMethods/dinners.svg'
import ifoodLogo from '../../images/footer/paymentMethods/ifood.svg'
import mastercardLogo from '../../images/footer/paymentMethods/mastercard.svg'
import pixLogo from '../../images/footer/paymentMethods/pix.svg'
import amexLogo from '../../images/footer/paymentMethods/amex.svg'
import ticketLogo from '../../images/footer/paymentMethods/ticket.svg'
import sodexoLogo from '../../images/footer/paymentMethods/sodexo.svg'


function InfoList(props) {
    return(
        <div className='info-list'>
            <h4 className='list-title'>{props.listTitle}</h4>
            <ul>
                {props.listItems.map((e, i) => <li key={i}>
                   <a href={e.itemHref}>
                    {e.itemText}
                   </a>
                </li>)}
            </ul>
        </div>
    )
}

function PaymentMethods(props) {
    return (
        <div className='payment-methods'>
            <h4 className='list-title'>FORMAS DE PAGAMENTO</h4>
            <ul>
                <div className='payment-methods-row'>
                    <li>
                        <img src={visaLogo} alt="logo Visa" />
                    </li>
                    <li>
                        <img src={eloLogo} alt="logo Elo" />
                    </li>
                    <li>
                        <img src={aleloLogo} alt="logo Alelo" />
                    </li>
                </div>
                <div className='payment-methods-row'>
                    <li>
                        <img src={dinnersLogo} alt="logo Dinners Club" />
                    </li>
                    <li>
                        <img src={ifoodLogo} alt="logo iFood" />
                    </li>
                    <li>
                        <img src={mastercardLogo} alt="logo Mastercard" />
                    </li>
                </div>
                <div className='payment-methods-row'>
                    <li>
                        <img src={pixLogo} alt="logo pix" />
                    </li>
                    <li>
                        <img src={amexLogo} alt="logo American express" />
                    </li>
                    <li>
                        <img src={ticketLogo} alt="logo Ticket" />
                    </li>
                </div>
                <div className='payment-methods-row one'>
                    <li>
                        <img src={sodexoLogo} alt="logo sodexo" />
                    </li>
                </div>
            </ul>
        </div>
    )
}

function FooterTop(props) {
    const firstListItems = [
        {itemText: 'CONHEÇA', itemHref: '#'}, 
        {itemText: 'COMO COMPRAR', itemHref: '#'},
        {itemText: 'INDICAÇÃO E DESCONTO', itemHref: '#'}
    ]

    const secondListItems = [
        {itemText: 'FALE CONOSCO', itemHref: '#'}, 
        {itemText: 'DÚVIDAS', itemHref: '#'},
        {itemText: 'PRAZOS DE ENTREGA', itemHref: '#'},
        {itemText: 'FORMAS DE PAGAMENTO', itemHref: '#'},
        {itemText: 'POLÍTICA DE PRIVACIDADE', itemHref: '#'},
        {itemText: 'TROCAS E DEVOLÇÕES', itemHref: '#'},
    ]

    return (
        <div className="footer-top">
            <div className='footer-content-lists'>
                <div className="footer-content-lists-column">
                    <InfoList listTitle='Sobre nós' listItems={firstListItems} />
                    <ul className='footer-content-lists-social-medias'>
                        <li>
                            <a>
                                <img src={facebookLogo} alt="Facebook" />   
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src={instagramLogo} alt="Instagram" />
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src={youtubeLogo} alt="Youtube" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer-content-lists-column">
                    <InfoList listTitle='INFORMAÇÕES ÚTEIS' listItems={secondListItems} />
                </div>
                <div className="footer-content-lists-column">
                    <PaymentMethods />
                </div>
            </div>
            <div className='footer-content-email-register'>
                <h3>
                    <span>CADASTRE-SE E RECEBA NOSSAS</span> <br /> NOVIDADES E PROMOÇÕES
                </h3>
                <p>
                    Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum
                </p>
                <div className='footer-content-email-register-input'>
                    <input type="text" placeholder='SEU E-MAIL' />
                    <button>OK</button>
                </div>
            </div>
        </div>
    )
}

export default FooterTop