import { CardPokemon } from '../components/card-pokemon/index.js'
import { Button } from '../components/button/index.js'
import { ThemeToggleButton } from '../components/theme-toggler-button/index.js'
import { ThemeContext } from '../contexts/themeContext.js'
import { useContext } from 'react'
import { Main } from './styledHome.js'

const Home = (name) => {
    const { theme } = useContext(ThemeContext)
    return (
        <Main style={{ backgroundColor: theme.background}}>
            <ThemeToggleButton />
            <CardPokemon name={name} />
            <Button />
        </Main>
    )
}

export { Home }