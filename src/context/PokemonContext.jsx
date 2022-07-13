import React, {useState, useEffect} from 'react';
import axios from 'axios';

const PokemonContext = React.createContext()
/* const PokemonUpdateContext = React.createContext() */

const url = "https://pokeapi.co/api/v2/pokemon/"

const params = {
    params: {
        limit: 50,
        offset: 0
    }
}



function PokemonProvider({children}) {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        axios.get(url, params)
    }, []);

    return ( 
        <PokemonContext.Provider value={pokemons}>
                { children }
        </PokemonContext.Provider>
     );
}

export default PokemonProvider;