const baseUrl = `https://pokeapi.co/api/v2/`

let pokemonsList = []
let numPoke = 0

async function request() {
    async function getPokemons() {
        const response = await fetch(`${baseUrl}pokemon/?limit=10&offset=${numPoke}`)
        return await response.json()
    }
    async function ss() {
        const pokemons = await getPokemons()
        return pokemons.results.map(async (e) => {
            const results = e.url
            const pokemon = await fetch(`${results}`)
            return await pokemon.json()
        })
    }
    return await ss()
}

const pro = await Promise.all(await request())

pro.map((e, index) => {
    pokemonsList[index] = {
        name: e.name,
        sprite: e.sprites.front_default,
        moves: e.moves.map(e => { return e.move.name }),
        types: e.types.map(type => { return type.type.name }),
        abilities: null
    }

    e.abilities.map(async (e) => {
        const getAbilityDescription = await fetch(`${e.ability.url}`)
        const response = await getAbilityDescription.json()
        response.effect_entries.map((e, i) => {
            if (e.language.name === 'en') {
                if (pokemonsList[index].abilities == null) {
                    pokemonsList[index].abilities = [{
                        abilitiesName: response.name,
                        abilitiesDescription: e.effect
                    }]
                } else if (pokemonsList[index].abilities.abilitiesName != response.name) {
                    pokemonsList[index].abilities[i] = {
                        abilitiesName: response.name,
                        abilitiesDescription: e.effect
                    }
                }
            }
        })
    })
})

async function callPokemons() {
    numPoke += 10
    const getNewPokemonList = await fetch(`${baseUrl}pokemon/?limit=10&offset=${numPoke}`)
    const response = await getNewPokemonList.json()
    const pros = await Promise.all(
        await response.results.map(async (e) => {
        const result = e.url
        const pokemon1 = await fetch(`${result}`)
        return await pokemon1.json()
    }))
    const pokemm = []
    pros.map((e, index) => {
        pokemm[index] = {
            name: e.name,
            sprite: e.sprites.front_default,
            moves: e.moves.map(e => { return e.move.name }),
            types: e.types.map(type => { return type.type.name }),
            abilities: null
        }

        e.abilities.map(async (e) => {
            const getAbilityDescription = await fetch(`${e.ability.url}`)
            const response = await getAbilityDescription.json()
            response.effect_entries.map((e, i) => {
                if (e.language.name === 'en') {
                    if (pokemm[index].abilities == null) {
                        pokemm[index].abilities = [{
                                                    abilitiesName: response.name,
                                                    abilitiesDescription: e.effect
                                                    }]
                    } else if (pokemm[index].abilities.abilitiesName != response.name) {
                        pokemm[index].abilities[i] = {
                                                        abilitiesName: response.name,
                                                        abilitiesDescription: e.effect
                                                    }
                    }
                }
            })
        })
    })
    pokemonsList = [...pokemonsList, ...pokemm]
}

export { pokemonsList, callPokemons }
