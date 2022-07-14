import { Routes, Route } from "react-router-dom"
import { Suspense, lazy } from "react";
import PokemonDetails from "./components/PokemonDetails"
import CardLoading from "./components/CardLoading";
const PokemonContainer = lazy(() => import("./components/PokemonsContainer"))


function App() {
  return (
    <main className="App">
      <Routes>
          <Route path="/" element={
            <Suspense fallback={<CardLoading/>}>
              <PokemonContainer />
            </Suspense>
          } />
          <Route path="/:pokemonId" element={<PokemonDetails/>} />
      </Routes>     
    </main>
  );
}

export default App;
