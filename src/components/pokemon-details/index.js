import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { pokemonsList } from '../../variables'


const PokemonDetails = (name) => {
    return (
        <>
            {
                pokemonsList.map((element, index) => {
                    if (element.name === name.name.name) {
                        return (
                            <Section key={index}>
                                <Div>
                                    <img src={element.sprite}></img>
                                    <p>{element.name}</p>
                                </Div>
                                <div>
                                    <MovesDiv>
                                        {element.moves.map((e, index) => {
                                            return <p key={index}>{e}</p>
                                        })}
                                    </MovesDiv>

                                    <AbilitiesDiv>
                                        {element.abilities.map((e, index) => {
                                            return (
                                                <Div key={index}>
                                                    <p>{e.abilitiesName}</p>
                                                    <p>{e.abilitiesDescription}</p>
                                                </Div>
                                            )
                                        })}
                                    </AbilitiesDiv>

                                    <div>
                                        {element.types.map((e, index) => {
                                            return <p key={index}>{e}</p>
                                        })}
                                    </div>
                                </div>

                                <Link to="/">Voltar a Home</Link>
                            </Section>
                        )
                    }
                })
            }
        </>
    )
}

export default PokemonDetails;

const Section = styled.section`
        display: flex;
    `

const Div = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
    `

const MovesDiv = styled.div`
        display: flex;
        gap: 5px;
        flex-wrap: wrap;
    `

const AbilitiesDiv = styled.div`
        display: flex;
        justify-content: space-around;
    `
