import { PokemonDetails } from "../components/pokemon-details";

const Details = (name) => {
    const namePokemon = name.name
    return (
        <PokemonDetails name={namePokemon} />
    )
}

export { Details }