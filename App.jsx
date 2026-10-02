import "./App.css"
import Navigation from "./components/Nav";
import Hero from "./components/Hero";
import Card from "./components/card1";
const App = () => {
  return (

    <div>

      <div className="container1">
          <Navigation />
      </div>

      <div className="container2">
          <Hero />
      </div>

      <div className="cards">
          <Card />
      </div>
    </div>
  )
} 


export default App;