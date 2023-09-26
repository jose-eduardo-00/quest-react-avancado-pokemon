import { useContext } from 'react'
import { ThemeContext } from '../../contexts/themeContext'
import { pokemonList } from '../../pokemonList'
import { Link } from 'react-router-dom'
import { Main } from './styled.js'

const PokemonDetails = (name) => {
    const { theme } = useContext(ThemeContext)
    const pokemonNameCard = name.name.name
    return (
        <>
            {
                pokemonList.map((e, index) => {
                    if (e.name === pokemonNameCard) {
                        return (
                            <Main key={index}  style={{background: theme.background}}>
                                <section style={{background: e.color[0]}}>
                                    <div id='image-pokemon'>
                                        <img src={e.sprite} alt="imagem do pokemon"></img>
                                        <p>{e.name}</p>
                                    </div>
                                    <div id='infos-pokemon'>
                                        <div id='types-pokemon'>
                                            <h1>Types</h1>
                                            <div>
                                                {e.types.map((a, index) => {
                                                    return <p key={index}>{a}</p>
                                                })}
                                            </div>
                                        </div>
                                        <div id='moves-pokemon'>
                                            <h1>Moves</h1>
                                            <div>
                                                {e.moves.map((a, index) => {
                                                    return <p key={index}>{a}</p>
                                                })}
                                            </div>
                                        </div>
                                        <div id='abilities-pokemon'>
                                            <h1>Abilities</h1>
                                            <div>
                                                {e.abilities.map((a, index) => {
                                                    return (
                                                        <div key={index}>
                                                            <h2>{a.abilitiesName}</h2>
                                                            <p>{a.abilitiesDescription}</p>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <Link to="/quest-react-avancado-pokemon"><button id='btn-voltar-home'>Voltar a Home</button></Link>
                            </Main>
                        )
                    }
                })
            }
        </>
    )
}

export { PokemonDetails };
