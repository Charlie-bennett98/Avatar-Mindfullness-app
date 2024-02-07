import styles from "./Form.module.css";
import axios from "axios";
import { useState, type FormEvent } from "react";
import WindCard from "../wind-card/Wind-Card";
import React from "react";

const IsWindSpeedHigh = (windSpeed: number) => {
  if (windSpeed > 10) return `Wind speed seems to be ${windSpeed + "mph"}, maybe Aang was here`; 
  
  return `wind speed seems to be ${windSpeed + "mph"}, I don't think Aang was here`;
}

const formLogic = async ({location}: {location: string}) => { 
  const response = await axios.get(
    `https://api.tomorrow.io/v4/weather/realtime?location=${location}&units=metric&apikey=zcrOLG4NfCDoP6VA1XBvDFzCqdUx6PZC`
  )
  
  const windSpeed = response?.data?.data?.values?.windSpeed

  if (!windSpeed) return "No wind speed available"

  const windSpeedInMph = windSpeed * 2.237
  
  const newWindSpeedValue = IsWindSpeedHigh(windSpeedInMph)

  return newWindSpeedValue
}

const Form = () => {
  const [windspeed, setWindspeed] = useState('')
  const [location, setLocation] = useState('')

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
 
    const windSpeedValue = await formLogic({location})

    setWindspeed(windSpeedValue)
  }

  return (
    <div>
      <form className={styles.form} id="form" onSubmit={handleOnSubmit}>
        <input
          type="text"
          id="location"
          className={styles.input}
          placeholder="location"
          required
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <button type="submit" className={styles.button}>Discover</button>
      </form>
      
      {!!windspeed && <WindCard cardValue={windspeed}/>}
    </div>
  )
}

        
export default Form;
