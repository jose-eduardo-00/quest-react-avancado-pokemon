import { getNewPokemons } from "../../pokemonList.js"


const Button = () => {
    return (
        <button className="btn" type="button" onClick={() => getNewPokemons()}>Ver Mais</button>
    )
}

export { Button }
