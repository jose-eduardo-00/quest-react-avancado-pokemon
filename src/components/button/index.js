import { getNewPokemons } from "../../pokemonList.js"
import { Footer } from "./styled.js"


const Button = () => {
    return (
        <Footer>
            <button className="btn" type="button" onClick={() => getNewPokemons()}>Ver Mais</button>
        </Footer>
    )
}

export { Button }
