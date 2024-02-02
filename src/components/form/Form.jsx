import "./Form.scss";
import axios from "axios";
import aangInIce from "../../assets/images/aang-in-ice.jpg";
import { useState } from "react";
// import cardValue from "../wind-card/Wind-Card";
import WindCard from "../wind-card/Wind-Card";
import { render } from "@testing-library/react";

const Form = (props) => {

  function IsWindSpeedHigh(windSpeed) {
    if (windSpeed > 10) {
      return `Wind speed seems to be ${windSpeed + "mph"}, maybe Aang was here`;
    } else {
      return `wind speed seems to be ${
        windSpeed + "mph"
      }, I don't think Aang was here`;
    }
  }

  function formLogic(e) {

    let arr = [];
    const arrLength = arr.length;
    
    e.preventDefault();
    const newLocation = e.target.location.value;
    console.log(newLocation)
    
    axios
    .get(
      `https://api.tomorrow.io/v4/weather/realtime?location=${newLocation}&units=metric&apikey=zcrOLG4NfCDoP6VA1XBvDFzCqdUx6PZC`
    )
    .then((response) => {
      console.log(response.data.data.values.windSpeed);
      const windSpeed = response.data.data.values.windSpeed;

      const windSpeedInMph = windSpeed* 2.237;
      
      const newWindSpeedValue = IsWindSpeedHigh(windSpeedInMph)

      console.log(newWindSpeedValue);

      // setCardValue(newWindSpeedValue)

      return (newWindSpeedValue)
    })
    .catch((error) => {
      console.log(error);
      alert("please provide a valid location");
    });
  }
    
    // function IsWindSpeedHigh(windSpeed) {
    //   if (windSpeed > 10) {
    //     return `Wind speed seems to be ${windSpeed + "mph"}, maybe Aang was here`;
    //   } else {
    //     return `wind speed seems to be ${
    //       windSpeed + "mph"
    //     }, I don't think Aang was here`;
    //   }
    // }
    // function convertToMph(speed) {
    //   const convertedWindSpeed = speed * 2.237;
    //   console.log(convertedWindSpeed);
    //   return convertedWindSpeed;
    // }
  
    
  return (
  <div>
    <form type="submit" class="app-form" id="form" onSubmit={formLogic}>
      <input
      type="text"     
      id="location"
      class="app-form_input"
      placeholder="location"
      required
      />
      <button type="submit" class="app-form__button">
        Discover</button>
        </form>  
        {/* <WindCard cardValue = {{image: "../assets/images/aang-in-ice.jpg", windspeed: cardValue}} /> */}
        <WindCard passedWindSpeedValue={this.props.newWindSpeedValue}/>
    </div>
  )
}

        
export default Form;
