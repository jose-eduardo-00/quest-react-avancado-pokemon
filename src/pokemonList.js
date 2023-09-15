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
            color: e.types.map(a => { 
                switch (a.type.name) {
                    case 'normal': return 'linear-gradient(to right top, #7e7e7e, #828186, #86858f, #8a8897, #8d8ca0, #9796ab, #a2a1b5, #acabc0, #c1bfcf, #d5d4df, #eae9ef, #ffffff)'
                    case 'fire': return 'linear-gradient(to right top, #ff0000, #e50307, #cb060b, #b1090d, #980b0e, #8b001c, #7c0025, #6b002b, #58093a, #3f1441, #231940, #051937)'
                    case 'water': return 'linear-gradient(to right top, #0000ff, #0405f9, #080af2, #0d0eec, #1011e6, #021bd7, #0021c7, #0025b7, #002898, #002578, #002057, #051937)'
                    case 'grass': return 'linear-gradient(to right top, #00ff00, #07ed09, #0ddc0f, #11cb13, #14ba15, #00a940, #009855, #00855f, #006b69, #004f66, #003354, #051937)'
                    case 'flying': return 'aquamarine'
                    case 'fighting': return 'orange'
                    case 'poison': return 'blueviolet'
                    case 'electric': return 'yellow'
                    case 'ground': return 'brown'
                    case 'rock': return 'burlywood'
                    case 'psychic': return 'indianred'
                    case 'ice': return 'linear-gradient(to right top, #5ff0f0, #58eaea, #51e3e3, #4adddd, #43d7d7, #2ec4cd, #18b1c1, #009eb4, #007a99, #00577b, #023759, #051937)'
                    case 'bug': return 'linear-gradient(to right top, #5ff05f, #59e559, #53da53, #4dd04d, #47c547, #21b55c, #00a46a, #009370, #007576, #00556e, #003658, #051937)'
                    case 'ghost': return 'darkmagenta'
                    case 'steel': return 'darkslategray'
                    case 'dragon': return 'midnightblue'
                    case 'dark': return 'darkslategrey'
                    case 'fairy': return 'pink'
                    default: console.log(`erro no ${e.name}`)
                }
            }),
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
            color: e.types.map(a => { 
                switch (a.type.name) {
                    case 'normal': return 'linear-gradient(to right top, #7e7e7e, #828186, #86858f, #8a8897, #8d8ca0, #9796ab, #a2a1b5, #acabc0, #c1bfcf, #d5d4df, #eae9ef, #ffffff)'
                    case 'fire': return 'linear-gradient(to right top, #ff0000, #e50307, #cb060b, #b1090d, #980b0e, #8b001c, #7c0025, #6b002b, #58093a, #3f1441, #231940, #051937)'
                    case 'water': return 'linear-gradient(to right top, #0000ff, #0405f9, #080af2, #0d0eec, #1011e6, #021bd7, #0021c7, #0025b7, #002898, #002578, #002057, #051937)'
                    case 'grass': return 'linear-gradient(to right top, #00ff00, #07ed09, #0ddc0f, #11cb13, #14ba15, #00a940, #009855, #00855f, #006b69, #004f66, #003354, #051937)'
                    case 'flying': return 'linear-gradient(to right top, #5fd7f0, #59cfe7, #54c7de, #4ebfd6, #49b7cd, #3da6bf, #3295b1, #2884a3, #1b6789, #124b6e, #0b3153, #051937)'
                    case 'fighting': return 'linear-gradient(to right top, #ff8000, #ff8000, #ff8000, #ff8000, #ff8000, #fb6829, #f1523e, #e3404d, #b32a64, #772968, #3a2657, #051937)'
                    case 'poison': return 'linear-gradient(to right top, #8a2be2, #8a2be2, #8a2be2, #8a2be2, #8a2be2, #7c33dd, #6f39d7, #623dd1, #4642c1, #2e44b0, #1a439c, #124187)'
                    case 'electric': return 'linear-gradient(to right top, #ffff00, #ffff00, #ffff00, #ffff00, #ffff00, #ffdd0f, #ffbc29, #ff9e3b, #f0655e, #bc4479, #6f3b7e, #0e3166)'
                    case 'ground': return 'linear-gradient(to right top, #996600, #916203, #8a5e06, #825a09, #7b560c, #7c4914, #7a3d1c, #753223, #682233, #4f1c3d, #2f1c3f, #051937)'
                    case 'rock': return 'linear-gradient(to right top, #cc9900, #c29005, #b88709, #ae7e0d, #a4750f, #a3621b, #9e5025, #94402d, #7f2a3f, #5d2248, #341f46, #051937)'
                    case 'psychic': return 'linear-gradient(to right top, #ff3399, #ef2f8f, #e02a85, #d1267c, #c22272, #ad2371, #97246e, #82246a, #5f2665, #3e255b, #20204b, #051937)'
                    case 'ice': return 'linear-gradient(to right top, #5ff0f0, #58eaea, #51e3e3, #4adddd, #43d7d7, #2ec4cd, #18b1c1, #009eb4, #007a99, #00577b, #023759, #051937)'
                    case 'bug': return 'linear-gradient(to right top, #5ff05f, #5ae85a, #56e056, #51d851, #4dd04d, #26c063, #00af72, #009d79, #007c7e, #005a74, #00385b, #051937)'
                    case 'ghost': return 'darkmagenta'
                    case 'steel': return 'darkslategray'
                    case 'dragon': return 'midnightblue'
                    case 'dark': return 'darkslategrey'
                    case 'fairy': return 'pink'
                    default: console.log(`erro no ${e.name}`)
                }
            }),
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