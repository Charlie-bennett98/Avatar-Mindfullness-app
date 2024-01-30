import "./Header.scss"
import airbendingsymbol from "../../assets/images/airbender-symbol.png";

const Header  = () => {
return (
    <header class="app-header">
      <h1 class="app-title">Midfulness</h1>
      <img id="air-bending-symbol" alt="airbender-symbol" src={airbendingsymbol}/>
      <h1>distractor</h1>
    </header>
)
}

export default Header;