import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from './home.js'
import { Details } from './pokemonDetails'

const AppRoutes = () => {
    const [name, setName] = useState('')

    const namePokemon = (e) => {
        setName(e)
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home getPokemonName={namePokemon} />} />
                <Route exact path='/pokemon-details/:id' element={<Details name={name} />} />
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }