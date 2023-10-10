import { baseUrl } from "../../variables.js"
import { getPokemonList, pokemonList } from "../../pokemonList.js"

let numPoke = 0

async function getNewPokemons() {
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

function newCardPokemon(state, setState, name) {
    const btn = document.querySelector('#btn')
    btn.addEventListener('click', () => {
        btn.classList.remove('btn')
        btn.classList.add('loading')
        setTimeout(() => {
            btn.classList.remove('loading')
            btn.classList.add('btn')
        }, 1500)
        setTimeout(() => {
            setState(state += name)
        }, 1600)
    })
}

export { getNewPokemons, newCardPokemon, numPoke }