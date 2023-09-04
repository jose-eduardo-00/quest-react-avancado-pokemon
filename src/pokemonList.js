import { baseUrl } from './variables.js'

let pokemonList = []
let numPoke = 0

async function getPokemons() {
    const response = await fetch(`${baseUrl}pokemon/?limit=10&offset=${numPoke}`)
    const objResponse = await response.json()
    const promiseList = await Promise.all(
        objResponse.results.map(async (e) => {
            const response = await fetch(`${e.url}`)
            return await response.json()
        }))

    promiseList.map((e, index) => {
        pokemonList[index] = {
            name: e.name,
            sprite: e.sprites.front_default,
            moves: e.moves.map(e => { return e.move.name }),
            types: e.types.map(e => { return e.type.name }),
            abilities: null
        }

        e.abilities.map(async (e) => {
            const getAbility = await fetch(`${e.ability.url}`)
            const response = await getAbility.json()
            response.effect_entries.map((e, i) => {
                if (e.language.name === 'en') {
                    if (pokemonList[index].abilities == null) {
                        pokemonList[index].abilities = [{
                            abilitiesName: response.name,
                            abilitiesDescription: e.effect
                        }]
                    } else if (pokemonList[index].abilities.abilitiesName !== response.name) {
                        pokemonList[index].abilities[i] = {
                            abilitiesName: response.name,
                            abilitiesDescription: e.effect
                        }
                    }
                }
            })
        })
    })
}
await getPokemons()


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
    newPromiseList.map((e, index) => {
        newPokemonList[index] = {
            name: e.name,
            sprite: e.sprites.front_default,
            moves: e.moves.map(e => { return e.move.name }),
            types: e.types.map(e => { return e.type.name }),
            abilities: null
        }

        e.abilities.map(async (e) => {
            const getAbilityDescription = await fetch(`${e.ability.url}`)
            const response = await getAbilityDescription.json()
            response.effect_entries.map((e, i) => {
                if (e.language.name === 'en') {
                    if (newPokemonList[index].abilities == null) {
                        newPokemonList[index].abilities = [{
                            abilitiesName: response.name,
                            abilitiesDescription: e.effect
                        }]
                    } else if (newPokemonList[index].abilities.abilitiesName !== response.name) {
                        newPokemonList[index].abilities[i] = {
                            abilitiesName: response.name,
                            abilitiesDescription: e.effect
                        }
                    }
                }
            })
        })
    })
    pokemonList = [...pokemonList, ...newPokemonList]

}

export { pokemonList, getNewPokemons }