import './Banner.scss'

function Banner(props) {
    return (
        <section className="banner">
            <div className='banner-content'>
                <h2>Venha conhecer nossas <br /> promoções <br/> <span>50% Off nos produtos</span></h2>
                <a>Ver produto</a>
            </div>
            <div className='banner-black-background'></div>
        </section>
    )
}

export default Banner