import "./Carousel.scss";
import { useEffect, useState } from "react";
import avatarQuotes from "../../Data/carousel-data.json";


//rafc is a shortcut to react functional component boiler plate 


function TestFunction() {
  return(
  <p>hello</p>
  )
}
const Quotes = () => {

  const [newQuote, setNewQuote] = useState("")


  const quoteArr = [
  
  {
    id: 1,
    quote: "Aang was a master of airbending, indicated by his tattoos. He was able to create an invisible wall of air in front or around him with one gesture, enough to repel two Fire Nation soldiers, He was able to jostle a Fire Nation soldier around without hitting the innocent bystander the soldier was holding hostage."
  },
  {
    id: 2,
    quote: "aang fact two"
  },
  {
    id: 3,
    quote: "aang fact three"
  }
]

// const shuffle = (array) => { 
//   for (let i = array.length - 1; i > 0; i--) { 
//     const j = Math.floor(Math.random() * (i + 1)); 
//     [array[i], array[j]] = [array[j], array[i]]; 
//   } 
// }; 

function newArray() {
  let i = quoteArr.length - 1;
  const j = Math.floor(Math.random() * (i + 1))
  const quote = quoteArr[j]
  const newRandomQuote = quote.quote;
  setNewQuote(newRandomQuote)
  console.log(newQuote)
}




return(
  <div>
    {<p>{newQuote}</p>}
 </div>
 )
}



 const carousel = () => {

  const dataQuotes = avatarQuotes.quotes;

  const [dataCarousel, setDataCarousel] = useState([])
  
  const [slide, setSlide] = useState(0)

  const [shuffledArr, setShuffledArr] = useState([])

const [activeSlide, setActiveSlide] = useState("true")


// const arrayDataItems = shuffledArray.map(quote => 
//   <article className={slide === id ? "slide" : "slide"slide-hidden" }" key={quote.id}>
//     <p>{quote.quote}</p>
//   </article>
// )


function btnClick (click) {
  const offset = click.dataset.carousel-btn === "next" ? 1 : -1
  const slides = click.closest(["data-slides"])
}



  return ( 
    <>
    <div className="carousel-component">
      <Quotes />      
      <TestFunction />
    </div>
    </>
  )
}
export default carousel;




