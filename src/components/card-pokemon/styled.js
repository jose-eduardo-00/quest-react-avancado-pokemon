import styled from 'styled-components'
import { pokemonList } from '../../pokemonList'

const grass = 'green'
const water = 'blue'
const fire = 'red'
const bug = 'green'

export const Section = styled.section`
        width: 80%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 20px 0;
        gap: 8px;

        div {
            padding: 30px;
            border: 5px solid yellow;
            border-radius: 10px;
        }
    `
