import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { pokemonsList } from '../../variables'
import { useEffect, useState } from 'react'


const CardPokemon = (name) => {
    const namePoke = name.name
    const [i, setI] = useState([])

    const aa = () => {        
        return (setTimeout(() => {
            setI(i.concat(namePoke))
            return (
                <Di>
                    {
                        pokemonsList.map((e, index) => {
                            const click = () => {
                                namePoke.click(e.name)
                            }
                            return (
                                <Link key={index} to={`/pokemon-details/${e.name}`}>
                                    <Div onClick={click}>
                                        <img src={e.sprite}></img>
                                        <p>{e.name}</p>
                                    </Div>
                                </Link>
                            )
                        })
                    }
                </Di>
            )
        }, 300))
    }

    useEffect(() => {
        function bb() {
            document.querySelector('.btn').addEventListener('click', aa)
        }
        bb()
    }, [pokemonsList])

    return (
        <Di>
            {
                pokemonsList.map((e, index) => {
                    const click = () => {
                        namePoke.click(e.name)
                    }
                    return (
                        <Link key={index} to={`/pokemon-details/${e.name}`}>
                            <Div onClick={click}>
                                <img src={e.sprite}></img>
                                <p>{e.name}</p>
                            </Div>
                        </Link>
                    )
                })
            }
        </Di>
    )
}

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
const Di = styled.div`
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;
        gap: 30px;
        padding: 80px;
    `

export { CardPokemon };