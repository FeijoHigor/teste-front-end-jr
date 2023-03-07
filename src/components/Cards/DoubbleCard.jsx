import Card from './Card'

import './DoubbleCard.scss'

function DoubbleCard(props) {
    return (
        <div className='doubble-card'>
            <Card cardData={props.cardData[0]} />
            <Card cardData={props.cardData.lenght > 1 ? props.cardData[1] : props.cardData[0]} />
        </div>
    )
}

export default DoubbleCard