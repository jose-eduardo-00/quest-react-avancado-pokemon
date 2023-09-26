import { baseUrl } from "../../variables.js"
import { getPokemonList, pokemonList } from "../../pokemonList.js"

export let numPoke = 0

export async function getNewPokemons() {
    numPoke += 10
    const getNewPokemonList = await fetch(`${baseUrl}pokemon/?limit=10&offset=${numPoke}`)
    const response = await getNewPokemonList.json()
    const newPromiseList = await Promise.all(
        response.results.map(async (e) => {
            const response = await fetch(`${e.url}`)
            return await response.json()
        }))
    const newPokemonList = []
    getPokemonList(newPromiseList, newPokemonList)
    pokemonList.push(...newPokemonList)
}