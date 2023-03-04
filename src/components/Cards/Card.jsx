import './Card.scss'

function Card({cardData}) {
    return (
        <div className={`card ${cardData.cardType}`}>
            <div className='card-content'>
                <h2>{cardData.title}</h2>
                <p>{cardData.description}</p>
                <a>{cardData.btnText}</a>
            </div>
            <div className='card-black-background'>

            </div>
        </div>
    )
}

export default Card