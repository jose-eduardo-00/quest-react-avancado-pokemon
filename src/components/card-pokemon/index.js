import { useEffect, useState } from 'react'
import { pokemonList } from '../../pokemonList.js'
import { getPokemons } from './functions.js'
import { getPokemonForType, getPokemonListAgain } from '../input-type-search/functions.js'
import { newCardPokemon } from '../button-show-more/functions.js'
import { Link } from 'react-router-dom'
import { Section } from './styled.js'


await getPokemons()

const CardPokemon = (name) => {
    const [state, setState] = useState([])
    const pokemonNameCard = name.name
    
    useEffect(() => {
        newCardPokemon(state, setState, pokemonNameCard)
        getPokemonForType(state, setState, pokemonNameCard)
        getPokemonListAgain(state, setState, pokemonNameCard)
    }, [])

    return (
        <Section>
            {
                pokemonList.map((e, index) => {
                    const pokemonName = () => {
                        pokemonNameCard.getPokemonName(e.name)
                    }
                    return (
                        <Link key={index} to={`/pokemon-details/${e.name}`}>
                            <div onClick={pokemonName} style={{ background: e.color[0] }}>
                                <img src={e.sprite} alt="imagem do pokemon"></img>
                                <p>{e.name}</p>
                            </div>
                        </Link>
                    )
                })
            }
        </Section >
    )
}

export { CardPokemon };