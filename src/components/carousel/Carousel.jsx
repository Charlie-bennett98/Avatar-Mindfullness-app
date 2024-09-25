import "./Carousel.scss";
import { useEffect, useState } from "react";
import avatarQuotes from "../../Data/carousel-data.json";


//rafc is a shortcut to react functional component boiler plate 

 const carousel = () => {

  const dataQuotes = avatarQuotes.quotes;

  console.log(dataQuotes)

  const [dataCarousel, setDataCarousel] = useState([])
  
  const [slide, setSlide] = useState(0)

  const [shuffledArr, setShuffledArr] = useState([])
// console.log(arr[0])
const [activeSlide, setActiveSlide] = useState("true")

// function mappedArray() {
//     dataQuotes.map((m) => {
//     const newQuote = (m.quote)
//     console.log(newQuote)
//     return(newQuote)
//     }
//      )
//     }
// const arr = [
//   {
//     id: 1,
//     quote: "Aang was a master of airbending, indicated by his tattoos. He was able to create an invisible wall of air in front or around him with one gesture, enough to repel two Fire Nation soldiers, He was able to jostle a Fire Nation soldier around without hitting the innocent bystander the soldier was holding hostage."
//   },
//   {
//     id: 2,
//     quote: "aang fact two"
//   },
//   {
//     id: 3,
//     quote: "aang fact three"
//   }
// ]

//randomly shuffling array

const shuffle = (array) => { 
  for (let i = array.length - 1; i > 0; i--) { 
    const j = Math.floor(Math.random() * (i + 1)); 
    [array[i], array[j]] = [array[j], array[i]]; 
  } 
}; 
//invoking shuffle function to get a random index 

// const shuffledArray = shuffle(carouselMappedData);
  
// useEffect(() => {
//   setShuffledArr(shuffledArray)
// })

// const arrayDataItems = shuffledArray.map(quote => 
//   <article className={slide === id ? "slide" : "slide"slide-hidden" }" key={quote.id}>
//     <p>{quote.quote}</p>
//   </article>
// )

function Quotes() {
  
  console.log(avatarQuotes.quotes)
    return(
    <div>{
      avatarQuotes.quotes.map((m) => {
      <p className = "quoteText">{m.quote}</p>
      console.log(m.quote)})
      }
    </div>
    )
  }



function btnClick (click) {
  const offset = click.dataset.carousel-btn === "next" ? 1 : -1
  const slides = click.closest(["data-slides"])
}



  return ( 
    <div className="carousel-component">
      {dataQuotes.map((m) => {
        <p>{m.quote}</p>
        console.log(m.quote)
      })}
      <p>hello</p>
       <Quotes/>
      {/* <button
      className="arrow arrow-left">L
      </button>
    {/* {arrayDataItems}
    <button
      className="arrow arrow-right">R
      </button>
    <div className="indicators"> */}


      {/* {dataCarousel.map((item, id) => {
      return (
        <img src={item.src} alt={item.alt} key={id} */}
    
      {/* {arrayDataItems.map((_, id) => {
        return <button key={id} onClick={null} className="indicator"></button>
      })} */}
    </div>
  )
}
export default carousel;




