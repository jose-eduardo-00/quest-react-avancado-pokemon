import { getNewPokemons } from "./functions.js"
import { Footer } from "./styled.js"

const ButtonShowMore = () => {
    return (
        <Footer>
            <button className="btn" id="btn" type="button" onClick={() => getNewPokemons()}>Carregar mais</button>
        </Footer>
    )
}

export { ButtonShowMore }
