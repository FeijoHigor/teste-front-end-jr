import econverseLogo from '../../images/footer/econverse-logo.svg'
import vtexLogo from '../../images/footer/vtex-logo.svg'

function Footer(props) {
    return (
        <footer>
            <div className="footer-bottom">
                <p>
                    Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos.  <br />
                    É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.
                </p>
                <div className="footer-bottom-brands">
                    <img src={econverseLogo} alt="Logo da Econverse" />
                    <img src={vtexLogo} alt="Logo da VTEX" />
                </div>
            </div>
        </footer>
    )
}

export default Footer