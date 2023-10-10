import { baseUrl } from '../../variables.js'
import { getPokemonList, pokemonList } from '../../pokemonList.js'
import { numPoke } from '../button-show-more/functions.js'


async function request() {
    const getNewPokemonList = await fetch(`${baseUrl}pokemon/?limit=${numPoke + 10}&offset=0`)
    const response = await getNewPokemonList.json()
    return await Promise.all(
        response.results.map(async (e) => {
            const response = await fetch(`${e.url}`)
            return await response.json()
        }))
}


function getPokemonForType(state, setState, namePokemon) {
    const search = document.querySelector('#search')
    search.addEventListener('click', async () => {
        const input = document.querySelector('#type-pokemon')
        const typePokemon = input.value

        const newPromiseList = await request()

        pokemonList.forEach(e => pokemonList.splice(e))
        
        const type = newPromiseList.filter(e => e.types[0].type.name === typePokemon)

        if (type.length !== 0) {
            getPokemonList(type, pokemonList)
            setTimeout(() => {
                input.value = ''
                setState(state.concat(namePokemon))
            }, 1000)
        } else {
            input.style.backgroundColor = '#ee1515'
            input.value = 'Tipo Inválido'
            getPokemonList(newPromiseList, pokemonList)
            setTimeout(() => {
                input.value = ''
                input.style.backgroundColor = '#fff'
            }, 2000)
        }
    })
}

function getPokemonListAgain(state, setState, namePokemon) {
    const btn = document.querySelector('#reload')
    btn.addEventListener('click', async () => {
        btn.classList.add('loading')
        
        const newPromiseList = await request()

        getPokemonList(newPromiseList, pokemonList)

        setTimeout(() => {
            btn.classList.remove('loading')
        }, 1000)
        setTimeout(() => {
            setState(state.concat(namePokemon))
        }, 1000)
    })
}


export { getPokemonForType, getPokemonListAgain }