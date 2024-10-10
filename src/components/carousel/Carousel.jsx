import "./Carousel.scss";
import { useRef, useEffect, useState } from "react";
import avatarQuotes from "../../Data/carousel-data.json";


//rafc is a shortcut to react functional component boiler plate 

const Carousel = () => {
  
  const [quote, setQuote] = useState(0)

  const quoteArr = [

   "Aang was a master of airbending, indicated by his tattoos. He was able to create an invisible wall of air in front or around him with one gesture, enough to repel two Fire Nation soldiers, He was able to jostle a Fire Nation soldier around without hitting the innocent bystander the soldier was holding hostage.",
    "aang fact two",
    "aang fact three"
  ]

// function to store the current state of the array index as props
  // function usePrevious(value) {
  //   const ref = useRef();
  //   useEffect(() => {
  //     ref.current = value;
  //   });
  //   return ref.current;
  // }


function changeQuote() {
let i = quoteArr.length - 1;
      const j = Math.floor(Math.random() * (i + 1))
      setQuote(j)
}      

  useEffect(() => {
    setInterval(changeQuote, 5000)  
  }) 

  const dataQuotes = avatarQuotes.quotes;

  return ( 
    <div className="carousel-component">
     <p className="quote">{quoteArr[quote]}</p>
    </div>
  )
}
export default Carousel;




