import Card from './Card'

function DoubbleCard(props) {
    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <Card cardData={props.cardData[0]} />
            <Card cardData={props.cardData.lenght > 1 ? props.cardData[1] : props.cardData[0]} />
        </div>
    )
}

export default DoubbleCard