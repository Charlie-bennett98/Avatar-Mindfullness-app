import React from "react";
import styles from "./Wind-Card.module.css"

const WindCard: React.FC<{cardValue: string}> = ({cardValue}) => (
  <div className={styles.card}>
    <img src='/images/aang-in-ice.jpg' alt="aang in ice" />

    <p className={styles.value} id="one">{cardValue}</p> 
  </div>
)

export default WindCard;