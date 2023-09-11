import { CardPokemon } from '../components/card-pokemon/index.js'
import { Button } from '../components/button/index.js'
import { ThemeToggleButton } from '../components/theme-toggler-button/index.js'
import { ThemeContext } from '../contexts/themeContext.js'
import { useContext } from 'react'

const Home = (name) => {
    const { theme } = useContext(ThemeContext)
    return (
        <main style={{ backgroundColor: theme.background}}>
            <ThemeToggleButton />
            <CardPokemon name={name} />
            <Button />
        </main>
    )
}

export { Home }