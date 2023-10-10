import { fireEvent, render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import { ButtonShowMore } from "./index.js"
import * as getNewPokemons from "./functions.js"
import * as newCardPokemon from "./functions.js"
import { act } from "react-dom/test-utils"

jest.useFakeTimers()

describe("ButtonShowMore Component", () => {
    it("should render ButtonShowMore", () => {
        render(<ButtonShowMore />)

        const button = screen.getByText(/Ver Mais/i)

        expect(button).toBeInTheDocument()
    });

    it("should have a loading class for 1s and you must take the class after 1s", () => {
        const spy = jest.spyOn(newCardPokemon, 'newCardPokemon')
        render(<ButtonShowMore />)

        const button = screen.getByText(/Ver Mais/i)

        spy()

        fireEvent.click(button)

        expect(button).toHaveClass('loading')
        act(() => {
            jest.advanceTimersByTime(1500)
            expect(button).not.toHaveClass('loading')
        })
    });

    it("should call onClick with click", () => {
        const spy = jest.spyOn(getNewPokemons, 'getNewPokemons')
        render(<ButtonShowMore />)
        
        const button = screen.getByText(/Ver Mais/i);
        
        fireEvent.click(button);

        expect(spy).toHaveBeenCalled();
    });
})