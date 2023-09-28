import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useState } from "react"
import { Home } from './home/home.js'
import { Details } from './pokemonDetails'

const AppRoutes = () => {
    const [name, setName] = useState('')

    const namePokemon = (e) => {
        setName(e)
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/quest-react-avancado-pokemon' element={<Home getPokemonName={namePokemon} />} />
                <Route exact path='/pokemon-details/:id' element={<Details name={name} />} />
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }