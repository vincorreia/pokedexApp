
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router";

const colors = {
   neutralWhite: "hsl(60, 30%, 96%)",
   bug: "hsl(80, 100%, 38%)",
   dark: "hsl(265, 10%, 36%)",
   dragon: "hsl(207, 100%, 40%)",
   electric: "hsl(50, 100%, 49%)",
   fairy: "hsl(308, 93%, 76%)",
   fighting: "hsl(339, 75%, 53%)",
   fire: "hsl(28, 100%, 62%)",
   flying: "hsl(217, 63%, 72%)",
   ghost: "hsl(222, 41%, 50%)",
   grass: "hsl(129, 57%, 48%)",
   ground: "hsl(21, 81%, 56%)",
   ice: "hsl(172, 60%, 56%)",
   normal: "hsl(208, 8%, 61%)",
   poison: "hsl(286, 52%, 61%)",
   psychic: "hsl(354, 100%, 70%)",
   rock: "hsl(44, 38%, 66%)",
   steel: "hsl(196, 29%, 50%)",
   water: "hsl(206, 71%, 53%)",
}

const PokemonCard = React.forwardRef(({pokemon}, ref) => {
    const image = decideImage() 
    const imageRef = useRef(null)
    const navigate = useNavigate()
    const types = pokemon.types.map(type => `${type.type.name}`)
    const typesFormatted = types.join(" ")
    const style = (types.length > 1 ? {background: `linear-gradient(180deg, transparent 65%, ${colors.neutralWhite} 35%), linear-gradient(90deg, ${colors[types[0]]} 50%, ${colors[types[1]]} 50%)`} 
                    :   {background: `linear-gradient(180deg, ${colors[types[0]]} 65%, ${colors.neutralWhite} 35%)`})



    useEffect(() => {
        if(imageRef.current){
            imageRef.current.addEventListener("click", () => {
                navigate("/" + pokemon.id)
            })
        }
    }, [imageRef])


    function decideImage(){
        if(pokemon.id >= 650){

            if(pokemon.id >= 899){
                switch(pokemon.id){
                    case 899:
                        return "https://archives.bulbagarden.net/media/upload/7/75/899Wyrdeer.png"
                    case 900:
                        return "https://archives.bulbagarden.net/media/upload/3/38/900Kleavor.png"
                    case 901:
                        return "https://archives.bulbagarden.net/media/upload/0/02/901Ursaluna.png"
                    case 902:
                        return "https://archives.bulbagarden.net/media/upload/3/32/902Basculegion.png"
                    case 903:
                        return "https://archives.bulbagarden.net/media/upload/5/5f/903Sneasler.png"
                    case 904:
                        return "https://archives.bulbagarden.net/media/upload/2/26/904Overqwil.png"
                    case 905:
                        return "https://archives.bulbagarden.net/media/upload/b/bf/905Enamorus.png"
                    default:
                        return new Error("Pokemon not found")
                }
            }
            else {
                return pokemon.sprites.other['official-artwork'].front_default
            }
        }
        else {
            return pokemon.sprites.other.dream_world.front_default
        }
    }
    return (
        <div className={"pokemon-card " + typesFormatted} ref={ref} style={style}>
            <div className="pokemon-image" ref={imageRef}>
               <img src={image} alt={pokemon.name} />
            </div>
            <div className="pokemon-text">
               <h2><span>#{pokemon.id} {pokemon.name}</span></h2>
               <div className="types">
                {pokemon.types.map(type => <p>{type.type.name}</p>)}
               </div>
            </div>
        </div>
    );
})

export default PokemonCard;