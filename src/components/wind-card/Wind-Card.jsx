import "./Wind-Card";

const WindCard = ({cardValue}) => {
    console.log(cardValue)
    return (
        <div className="app-card">
                <div class="app-card_boundary">
                    <p class="app-card_value" id="1">{cardValue}</p>
                </div>
        </div>
        )
    }

export default WindCard;