import "./Form.scss";
import axios from "axios";
import aangInIce from "../../assets/images/aang-in-ice.jpg";
import { useState } from "react";
// import cardValue from "../wind-card/Wind-Card";
import WindCard from "../wind-card/Wind-Card";
import { render } from "@testing-library/react";

function IsWindSpeedHigh(windSpeed) {
  if (windSpeed > 10) {
    return `Wind speed seems to be ${windSpeed + "mph"}, maybe Aang was here`;
  } else {
    return `wind speed seems to be ${
      windSpeed + "mph"
    }, I don't think Aang was here`;
  }
}

function formLogic({location}) {
  let arr = [];
  const arrLength = arr.length;
  
  // const newLocation = e.target.location.value;
  // console.log(newLocation)
  
  axios
  .get(
    `https://api.tomorrow.io/v4/weather/realtime?location=${location}&units=metric&apikey=zcrOLG4NfCDoP6VA1XBvDFzCqdUx6PZC`
  )
  .then((response) => {
    console.log(response.data.data.values.windSpeed);
    const windSpeed = response.data.data.values.windSpeed;

    const windSpeedInMph = windSpeed* 2.237;
    
    const newWindSpeedValue = IsWindSpeedHigh(windSpeedInMph)

    console.log(newWindSpeedValue);

    // setCardValue(newWindSpeedValue)


    return newWindSpeedValue
  })
  .catch((error) => {
    console.log(error);
    alert("please provide a valid location");
  });
}


const handleOnSubmit = (e) => {
  e.preventDefault();
  console.log("form submitted");

  formLogic({location: e.target.location.value})
}

const Form = (props) => {

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
  const [windspeed, setWindspeed] = useState(0);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
 
    const windSpeedValue = formLogic({location: e.target.location.value})

    setWindspeed(windSpeedValue)
  }
  
    
  return (
    <div>
      <form type="submit" class="app-form" id="form" onSubmit={handleOnSubmit}>
        <input
          type="text"     
          id="location"
          class="app-form_input"
          placeholder="location"
          required
        />
        <button type="submit" class="app-form__button">Discover</button>
      </form>  
      
      {/* <WindCard cardValue = {{image: "../assets/images/aang-in-ice.jpg", windspeed: cardValue}} /> */}
      
      <WindCard passedWindSpeedValue={windspeed}/>
    </div>
  )
}

        
export default Form;
