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

async function searchPokemonForType(state, setState, namePokemon){
    const input = document.querySelector('#type-pokemon')
    const typePokemon = input.value.toLowerCase()
    const newPromiseList = await request()

    pokemonList.forEach(e => pokemonList.splice(e))
    
    let type = []

    newPromiseList.map(e => {
        if(e.types[0].type.name === typePokemon) {
            type.push(e)
        } else if (e.types.length === 2)  {
            if(e.types[1].type.name === typePokemon) {
                type.push(e)
            }
        }
    })

    if (type.length !== 0) {
        getPokemonList(type, pokemonList)
        setTimeout(() => {
            input.value = ''
            setState(state.concat(namePokemon))
        }, 1000)
    } else {
        input.style.backgroundColor = '#ee1515'
        input.value = 'Tipo inexistente na lista'
        getPokemonList(newPromiseList, pokemonList)
        setTimeout(() => {
            input.value = ''
            input.style.backgroundColor = '#fff'
        }, 2000)
    }
}


function getPokemonForType(state, setState, namePokemon) {
    const search = document.querySelector('#search')
    search.addEventListener('click', async () => {
        await searchPokemonForType(state, setState, namePokemon)
    })
    const input = document.querySelector('#type-pokemon')
    input.addEventListener('keypress', async (e) => {        
        if (e.key === 'Enter') {
            await searchPokemonForType(state, setState, namePokemon)
        }
    })
}

function getPokemonListAgain(state, setState, namePokemon) {
    const btn = document.querySelector('#reload')
    btn.addEventListener('click', async () => {
        btn.classList.add('reload')
        
        const newPromiseList = await request()

        getPokemonList(newPromiseList, pokemonList)

        setTimeout(() => {
            btn.classList.remove('reload')
        }, 1000)
        setTimeout(() => {
            setState(state.concat(namePokemon))
        }, 1000)
    })
}


export { getPokemonForType, getPokemonListAgain }