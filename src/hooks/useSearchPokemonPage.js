import { useEffect, useRef, useState } from "react";
import { useUpdatePokemons } from "../context/PokemonContext";

function useSearchPokemonPage(query, pageNumber) {
    
    const [loading, setLoading] = useState(true)
    const [pokemons, setPokemons] = useState([])
    const [offset, setOffset] = useState([1, 20])
    const [hasMore, setHasMore] = useState(true)
    const updatePokemons = useUpdatePokemons()

    useEffect(() => {
        setPokemons([])
    }, [query])

    useEffect(() => {
        if(offset[1] < 900){
            if(pageNumber > 1) setOffset([(20 * pageNumber) - 19, 20 * pageNumber])
        }
        else {
            setHasMore(false)
            setOffset([901, 905])
        }
        setLoading(true)

    }, [pageNumber, query]);


    useEffect(() => {
        let newPokemons = []
        for(let i = offset[0]; i <= offset[1]; i++){
            updatePokemons(i)
            .then(pokemon => {
                newPokemons.push(pokemon)
                if(i === offset[1]){
                    setPokemons(prevPokemons => {
                        return [...prevPokemons, ...newPokemons.map(item => item)].sort(sortArrayById)
                    })
                }
            })
            .catch(err => {throw err})
        }
        setLoading(false)
    }, [offset]);

    function sortArrayById(a, b) {
        var idA = a.id
        var idB = b.id

        if(idA < idB) return -1
        if(idB > idA) return 1
    }

    return {loading, pokemons, hasMore};
}

export default useSearchPokemonPage;