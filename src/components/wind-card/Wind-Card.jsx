import "./Wind-Card.scss"

const WindCard = ({cardValue}) => (
  <div className="app-card">
    <img src='/images/aang-in-ice.jpg' alt="aang in ice" />

    <p className="app-card_value" id="one">{cardValue}</p> 
  </div>
)

export default WindCard;