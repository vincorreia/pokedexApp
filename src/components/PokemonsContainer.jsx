import React, {useEffect, useRef, useState, useCallback} from 'react';
import PokemonCard from "./PokemonCard"
import useSearchPokemonPage from '../hooks/useSearchPokemonPage';


function PokemonContainer() {

    const [query, setQuery] = useState('')
    const [pageNumber, setPageNumber] = useState(1)
    const {pokemons, hasMore, loading} = useSearchPokemonPage(query, pageNumber)

    const observer = useRef()
    const lastPokemonRef = useCallback(node => {
        if(loading) return
        if(observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting && hasMore){
                setPageNumber(pageNumber + 1)
            }
        })
        if(node) observer.current.observe(node)
    }, [loading, hasMore])
    
    function handleSearch(event) {
        setQuery(event.target.value)
        setPageNumber(1)
    }

    useEffect(() => { 
    }, [pokemons]);

        return (
        <section className='pokemon-container'>
            {/* <input type="text"/> */}
            {pokemons.length > 0 && pokemons.map((pokemon, index) => {
                if(pokemons.length === index + 1) {
                    return <PokemonCard pokemon={pokemon} key={pokemon.id}></PokemonCard>
                }
                else {
                    return <PokemonCard pokemon={pokemon} key={pokemon.id} ref={lastPokemonRef}></PokemonCard>
                }
            })}
            {loading && <div>Loading...</div>}
        </section>);
}

export default PokemonContainer;