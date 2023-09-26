import { CardPokemon } from '../components/card-pokemon/index.js'
import { InputTypeSearch } from '../components/input-type-search/index.js'
import { ThemeToggleButton } from '../components/theme-toggler-button/index.js'
import { ButtonShowMore } from '../components/button-show-more/index.js'
import { ThemeContext } from '../contexts/themeContext.js'
import { useContext } from 'react'
import { Header } from './styledHeader.js'
import { Main } from './styledHome.js'

const Home = (name) => {
    const { theme } = useContext(ThemeContext)
    return (
        <>
            <Header>
                <InputTypeSearch />
                <ThemeToggleButton />
            </Header>
            <Main style={{ backgroundColor: theme.background}}>
                <CardPokemon name={name} />
                <ButtonShowMore />
            </Main>
        </>
    )
}

export { Home }