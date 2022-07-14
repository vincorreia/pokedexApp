import { Routes, Route } from "react-router-dom"
import PokemonDetails from "./components/PokemonDetails"
import Navbar  from "./components/Navbar"
function App() {
  return (
    <div className="App">
      <Navbar />
    <Routes>
        <Route path="/:pokemonId" element={<PokemonDetails/>} />
    </Routes>
    </div>
  );
}

export default App;
