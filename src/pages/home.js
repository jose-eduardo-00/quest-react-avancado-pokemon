import { CardPokemon } from '../components/card-pokemon/index.js'
import { Button } from '../components/button/index.js'

const Home = (name) => {
    return (
        <>
            <CardPokemon name={name}/>
            <Button />
        </>
    )
}

export { Home }