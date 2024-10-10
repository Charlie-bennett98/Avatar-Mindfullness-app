import styles from "./Form.module.css";
import axios from "axios";
import { useState, type FormEvent } from "react";
import WindCard from "../wind-card/Wind-Card";
import React from "react";

const IsWindSpeedHigh = (windSpeed: number) => {
  if (windSpeed > 10) return `Wind speed seems to be ${windSpeed + "mph"}, prehapse the avatar has returned and the legends are true.`; 
  return `wind speed seems to be ${windSpeed + "mph"}, It seems the story's are just legend afterall has returned and Aang was here`;
}

const formLogic = async ({location}: {location: string}) => { 

  const API_KEY = "fbaa5ed5b6fe4d1baa3103730242309&q"

  console.log(location)
  const response = await axios.get(
    //`https://api.tomorrow.io/v4/weather/realtime?location=${location}&units=metric&apikey=zcrOLG4NfCDoP6VA1XBvDFzCqdUx6PZC`
    `http://api.weatherapi.com/v1/current.json?key=${API_KEY}=${location}=no`
  )
  console.log(response.data.current.wind_mph)
  const windSpeed = response.data.current.wind_mph
  // const windSpeed = response?.data?.data?.values?.windSpeed

  if (!windSpeed) return "No wind speed available"

  /* conversion to mph not needed for new api */
  // const windSpeedInMph = windSpeed * 2.237

  const newWindSpeedValue = IsWindSpeedHigh(windSpeed)
  console.log(newWindSpeedValue)
  return newWindSpeedValue
  
}

const Form = () => {

  const [windspeed, setWindspeed] = useState('')
  const [location, setLocation] = useState('')
  const [saveButton, setSaveButton] = useState(false)


  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

 
    const windSpeedValue = await formLogic({location})
    setSaveButton(true)

    setWindspeed(windSpeedValue)
  }
  console.log(windspeed)

  return (
    <div>
      <form className={styles.form} id="form" onSubmit={handleOnSubmit}>
        <div>
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
        </div>
        </form>
      <div className ={styles.windcard_section}>
      {!!windspeed && <WindCard cardValue={windspeed}/>}
      </div>
      {saveButton && (
      <button className="save-button">
      save result
    </button>)}
    </div>
  )
}

        
export default Form;

