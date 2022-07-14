import React, {useState, useContext, useRef} from 'react';
import { useSearchSinglePokemon } from '../hooks/useSearchSinglePokemon';

const PokemonContext = React.createContext()
const PokemonUpdateContext = React.createContext()

export function usePokemons(){ // Hook to get pokemons context
    return useContext(PokemonContext)
}

export function useUpdatePokemons(){ // Hook to update pokemons context
    return useContext(PokemonUpdateContext)
}

function PokemonProvider({children}) {
    const [pokemons, setPokemons] = useState([])
    const newPokemonsId = useRef()
    const request = useSearchSinglePokemon()

    function findOrCreatePokemon(id) {
        return new Promise((resolve, reject) => {
            if(id <= 0 || id >= 906) {
                reject(new Error("Pokemon not found"))
            }
            else {
                if(!checkPokemon(id)){
                    resolve(createPokemon(id))
                }

                else {
                    resolve(findPokemon(id))
                }
            }
        })
    }

    function createPokemon(id){ // Will add it to pokemons state
        return request(id)
        .then(data => {
        let newPokemons = [...pokemons, data].sort(sortArrayById)
        newPokemonsId.current = newPokemonsId.current + id
        setPokemons(newPokemons) // id will never be 0 or negative
        return data
        })
    }
    
    function findPokemon(id){
        let foundPokemon
        for(let i = 0; i < pokemons.length; i++) {
            if(pokemons[i].id === id){
                foundPokemon = pokemons[i]
                break
            }
        }
        return foundPokemon
    }

    function checkPokemon(id) { // check if the pokemon is already included on state
        if(newPokemonsId.current && newPokemonsId.current.includes(id)){
            return true
        }
        else {
            return false
        }
     }

    function sortArrayById(a, b) {
        var idA = a.id
        var idB = b.id

        if(idA < idB) return -1
        if(idB > idA) return 1
    }
    return ( 
        <PokemonContext.Provider value={pokemons}>
            <PokemonUpdateContext.Provider value={findOrCreatePokemon}>
                { children }
            </PokemonUpdateContext.Provider>
        </PokemonContext.Provider>
     );
}

export default PokemonProvider;