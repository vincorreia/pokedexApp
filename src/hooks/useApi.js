import axios from "axios"

const url = "https://pokeapi.co/api/v2/pokemon/"

export function useApi(){

  const runApi = (pokemonId) => {
    
    return new Promise((resolve, reject) => {
      axios.get(url + pokemonId)

      .then(pokemon => {

          if(pokemon.status !== 200){
            reject(new Error(pokemon.statusText));
          } 
          
          else {
            resolve(pokemon.data)
          }

        })
      }
    )
  }

  return runApi
}