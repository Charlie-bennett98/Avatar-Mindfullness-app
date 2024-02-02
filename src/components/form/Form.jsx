import "./Form.scss";
import axios from "axios";
import { useState } from "react";
import WindCard from "../wind-card/Wind-Card";

function IsWindSpeedHigh(windSpeed) {
  if (windSpeed > 10) return `Wind speed seems to be ${windSpeed + "mph"}, maybe Aang was here`; 
  
  return `wind speed seems to be ${windSpeed + "mph"}, I don't think Aang was here`;
}

const formLogic = async ({location}) => {
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
  const [windspeed, setWindspeed] = useState(0);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
 
    const windSpeedValue = await formLogic({location: e.target.location.value})

    setWindspeed(windSpeedValue)
  }

  return (
    <div>
      <form type="submit" class="app-form" id="form" onSubmit={(e) => void handleOnSubmit(e)}>
        <input
          type="text"     
          id="location"
          class="app-form_input"
          placeholder="location"
          required
        />

        <button type="submit" class="app-form__button">Discover</button>
      </form>
      
      {!!windspeed && <WindCard cardValue={windspeed}/>}
    </div>
  )
}

        
export default Form;
