
import './App.css';
import Header from "./components/header/Header.jsx";
import Hero from "./components/hero/Hero.jsx";
import Form from "./components/form/Form.jsx";
import WindCard from "./components/wind-card/Wind-Card.jsx";

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Form/>
      <WindCard/>
    </div>
  );
}

export default App;
