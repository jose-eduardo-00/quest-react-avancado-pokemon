import { Link } from 'react-router-dom'
import { pokemonList, cardColor } from '../../pokemonList.js'
import { useEffect, useState } from 'react'
import { Section } from './styled.js'


const CardPokemon = (name) => {
    const [state, setState] = useState([])
    const pokemonNameCard = name.name
    useEffect(() => {
        function newCardPokemon() {
            document.querySelector('.btn').addEventListener('click', () => {
                return (setTimeout(() => {
                    setState(state.concat(pokemonNameCard))
                    return (
                        <>
                            {
                                pokemonList.map((e, index) => {
                                    const pokemonName = () => {
                                        pokemonNameCard.getPokemonName(e.name)
                                    }
                                    return (
                                        <Link key={index} to={`/pokemon-details/${e.name}`}>
                                            <div onClick={pokemonName}>
                                                <img src={e.sprite} alt="imagem do pokemon"></img>
                                                <p>{e.name}</p>
                                            </div>
                                        </Link>
                                    )
                                })
                            }
                        </>
                    )
                }, 500))
            })
        }
        newCardPokemon()
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
                            <div onClick={pokemonName}  style={{background: e.color[0]}}>
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