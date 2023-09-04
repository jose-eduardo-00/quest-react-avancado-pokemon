import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { pokemonList } from '../../pokemonList.js'
import { useEffect, useState } from 'react'


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
                                            <Div onClick={pokemonName}>
                                                <img src={e.sprite} alt="imagem do pokemon"></img>
                                                <p>{e.name}</p>
                                            </Div>
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
                            <Div onClick={pokemonName}>
                                <img src={e.sprite} alt="imagem do pokemon"></img>
                                <p>{e.name}</p>
                            </Div>
                        </Link>
                    )
                })
            }
        </Section>
    )
}

const Section = styled.section`
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;
        gap: 30px;
        padding: 80px;
    `
const Div = styled.div`
        border: 1px solid #000;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 40px;
        background-color: gray;
    `

export { CardPokemon };