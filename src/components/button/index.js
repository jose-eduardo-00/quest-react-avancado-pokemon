import { callPokemons } from "../../variables"
import '../card-pokemon/index.js'


const Button = () => {
    return (
        <button className="btn" type="button" onClick={() => callPokemons()}>Ver Mais</button>
    )
}

export { Button }
