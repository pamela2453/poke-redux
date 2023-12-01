import axios from 'axios'

const API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=150';
export const getPokemon = () => {
    return axios
        .get(API_URL)
        .then((response) => response.data.results)
        .catch((error) => console.error(error));
        
}


export const getPokemonsDetails = (pokemon) => {
    return axios.get(pokemon.url)
    .then(res => res.data)
    .catch((err) => console.log(err));
}