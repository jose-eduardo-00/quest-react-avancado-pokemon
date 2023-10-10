import { baseUrl } from "../../variables"
import { getPokemonList, pokemonList } from "../../pokemonList"


async function getPokemons() {
    const response = await fetch(`${baseUrl}pokemon/?limit=10&offset=0`)
    const objResponse = await response.json()
    const promiseList = await Promise.all(
        objResponse.results.map(async (e) => {
            const response = await fetch(`${e.url}`)
            return await response.json()
        }))
    getPokemonList(promiseList, pokemonList)
};

export { getPokemons }