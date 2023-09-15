import { Link } from 'react-router-dom'
import { pokemonList } from '../../pokemonList'
import { Section, Div, AbilitiesDiv, MovesDiv } from './styled.js'

const PokemonDetails = (name) => {
    const pokemonNameCard = name.name.name
    return (
        <>
            {
                pokemonList.map((e, index) => {
                    if (e.name === pokemonNameCard) {
                        return (
                            <Section key={index}>
                                <Div>
                                    <img src={e.sprite} alt="imagem do pokemon"></img>
                                    <p>{e.name}</p>
                                </Div>
                                <div>
                                    <MovesDiv>
                                        {e.moves.map((a, index) => {
                                            return <p key={index}>{a}</p>
                                        })}
                                    </MovesDiv>

                                    <AbilitiesDiv>
                                        {e.abilities.map((a, index) => {
                                            return (
                                                <Div key={index}>
                                                    <p>{a.abilitiesName}</p>
                                                    <p>{a.abilitiesDescription}</p>
                                                </Div>
                                            )
                                        })}
                                    </AbilitiesDiv>

                                    <div>
                                        {e.types.map((a, index) => {
                                            return <p key={index}>{a}</p>
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
