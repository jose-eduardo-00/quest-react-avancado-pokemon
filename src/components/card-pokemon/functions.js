import { baseUrl } from "../../variables"
import { getPokemonList, pokemonList } from "../../pokemonList"
import { CardPokemon } from "./index.js"

async function getPokemons() {
    const response = await fetch(`${baseUrl}pokemon/?limit=10&offset=0`)
    const objResponse = await response.json()
    const promiseList = await Promise.all(
        objResponse.results.map(async (e) => {
            const response = await fetch(`${e.url}`)
            return await response.json()
        }))
    getPokemonList(promiseList, pokemonList)
}

function newCardPokemon(state, setState, pokemonNameCard) {
    const btn = document.querySelector('#btn')
    btn.addEventListener('click', () => {
        btn.classList.remove('btn')
        btn.classList.add('loading')
        setTimeout(() => {
            btn.classList.remove('loading')
            btn.classList.add('btn')
        }, 1000);
        return (setTimeout(() => {
            setState(state.concat(pokemonNameCard))
            return (
                <CardPokemon />
            )
        }, 1000))
    })
}

export { getPokemons, newCardPokemon }