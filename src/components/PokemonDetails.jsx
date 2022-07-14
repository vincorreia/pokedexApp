import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useUpdatePokemons } from "../context/PokemonContext";


function capitalize(text) {
  return text[0].toUpperCase() + text.slice(1)
}

function changeTitle(data) {
  const name = capitalize(data.name)
  const id = data.id
  document.title = `#${id} - ${name}`
}
function PokemonDetails() {
    const [pokemon, setPokemon] = useState(null)
    const [id, setId] = useState(useParams().pokemonId)
    const updatePokemons = useUpdatePokemons()
    const navigate = useNavigate()

    useEffect(() => {
        updatePokemons(id)
        
        .then(data => {
          changeTitle(data)
          setPokemon(data)
        },
        error => {
          throw error
        })
    }, [id])

    return ( 
      <div>
        <button onClick={() => {
            navigate("/" + (Number(id) - 1))
            setId(Number(id) - 1)
        }}>Previous</button>

        {pokemon && capitalize(pokemon.name)}

        <button onClick={() => {
            navigate("/" + (Number(id) + 1))
            setId(Number(id) + 1)
        }}>Next</button>
      </div>
     );
}

export default PokemonDetails;