import "./Hero.scss";
import { useEffect, useState } from "react";

const Hero = () => {

//   const arr = [{id: "1", quote: "Aang was a master of airbending, indicated by his tattoos. He was able to create an invisible wall of air in front or around him with one gesture, enough to repel two Fire Nation soldiers, He was able to jostle a Fire Nation soldier around without hitting the innocent bystander the soldier was holding hostage."},
//   {id: "2", quote: "aang fact two"},
//   {id: "3", quote: "aang fact three"}
// ]

const arr = ["Aang was a master of airbending, indicated by his tattoos. He was able to create an invisible wall of air in front or around him with one gesture, enough to repel two Fire Nation soldiers, He was able to jostle a Fire Nation soldier around without hitting the innocent bystander the soldier was holding hostage.",
"aang fact two",
"aang fact three"]

const [quoteIndex, setQuoteIndex] = useState("")
// console.log(arr[0])


  while (true) {
    const randomInt = Math.floor(Math.random() * 4)
    setInterval(setQuoteIndex(randomInt), 6000)
    console.log(quoteIndex)
    } 
  
    //4 is number of index's in array plus 1



//   // function getRandomInt(min, max) {
//   //   const randomInt = Math.random(1,3)
//   // }
    
 
// const ranInteger = Math.floor(Math.random() * 4);
// let n = []
// console.log(ranInteger)
// setQuote(n)
// console.log(n)
// arr[ranInteger]

// // setInterval(setQuoteId(ranInteger), 60000)
// // setInterval(getRandomInt, 1000);

  return ( 
    <div>
      <article class="app-hero">
        <h2 id="fact">
          {arr[quoteIndex]}
          
          </h2>
      </article>
      
    </div>
  )
  }
export default Hero;
