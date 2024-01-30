import "./Form.scss";
import axios from "axios";
import aangInIce from "../../assets/images/aang-in-ice.jpg";
import { useState } from "react";
import cardValue from "../wind-card/Wind-Card";
import WindCard from "../wind-card/Wind-Card";

const Form = () => {

const [cardValue, setCardValue] = useState("");

const params = "waveHeight,airTemperature";

const API_URL = "https://api.stormglass.io/v2/weather/point?";

const Tomorrow_Io_Key = "zcrOLG4NfCDoP6VA1XBvDFzCqdUx6PZC";

const Image_URL = "../../assets/images/";

let arr = [];
const arrLength = arr.length;

const getWindSpeed = (e) => {
  
  e.preventDefault();
  console.log(e.target.location.value)
  const newLocation = e.target.location.value;
 
  axios
    .get(
      `https://api.tomorrow.io/v4/weather/realtime?location=${newLocation}&units=metric&apikey=zcrOLG4NfCDoP6VA1XBvDFzCqdUx6PZC`
    )
    .then((response) => {
      console.log(response);
      console.log(response.data.data.values.windSpeed);
      const windSpeedMs = response.data.data.values.windSpeed;
      const windSpeedInMph = convertToMph(windSpeedMs);

      console.log(windSpeedInMph);
      const newWindSpeedValue = IsWindSpeedHigh(windSpeedInMph);
      console.log(newWindSpeedValue);
      setCardValue(newWindSpeedValue)
    })
    .catch((error) => {
      console.log(error);
      alert("please provide a valid location");
    });
};

function IsWindSpeedHigh(windSpeed) {
  if (windSpeed > 10) {
    return `Wind speed seems to be ${windSpeed + "mph"}, maybe Aang was here`;
   
  } else {
    return `wind speed seems to be ${
      windSpeed + "mph"
    }, I don't think Aang was here`;
  }
}



function convertToMph(speed) {
  const convertedWindSpeed = speed * 2.237;
  console.log(convertedWindSpeed);
  return convertedWindSpeed;
}
    return (
      <div>
        <form type="submit" class="app-form" id="form" onSubmit={getWindSpeed}>
            <input
            type="text"     
            id="location"
            class="app-form_input"
            placeholder="location"
            required
            />
            <button type="submit" class="app-form__button">
                Discover
            </button>
        </form>  
        <WindCard cardValue={cardValue}/>
      </div>
    )
}

export default Form;