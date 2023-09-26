import { numPoke } from '../button-show-more/functions.js'
import { baseUrl } from '../../variables.js'
import { getPokemonList, pokemonList } from '../../pokemonList.js'

async function getField() {
    const input = document.querySelector('#type-pokemon')
    const typePokemon = input.value
    const getNewPokemonList = await fetch(`${baseUrl}pokemon/?limit=${numPoke + 10}&offset=0`)
    const response = await getNewPokemonList.json()
    const newPromiseList = await Promise.all(
        response.results.map(async (e) => {
            const response = await fetch(`${e.url}`)
            return await response.json()
        }))
    console.log(newPromiseList)
    pokemonList.forEach(e => pokemonList.splice(e))
    const p = newPromiseList.filter(e => e.types[0].type.name === typePokemon)
    getPokemonList(p, pokemonList)
}

function input(state, setState, pokemonNameCard) {
    const i = document.querySelector('#input')
    i.addEventListener('click', () => {
        setTimeout(() => {
            setState(state.concat(pokemonNameCard))
        }, 1000);
    })
}

// Criar o botao ou a opção de all(fazer reaparecer toda a lista de pokemons)

export { getField, input }