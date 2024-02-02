import "./Wind-Card.scss"
import aangInIce from "../../assets/images/aang-in-ice.jpg";
import { useEffect, useState } from "react";

const WindCard = ({cardValue}) => {
   

    console.log(cardValue)

    console.log(cardValue)
    return (
        <div className="app-card">
                    {/* <img src={aangInIce} alt="aang in ice" /> */}
            <p className="app-card_value" id="one">{cardValue}</p> 
        </div>
        )

    }

export default WindCard;