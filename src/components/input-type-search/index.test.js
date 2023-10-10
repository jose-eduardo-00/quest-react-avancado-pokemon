import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import { InputTypeSearch } from "./index.js"

describe("InputTypeSearch Component", () => {
    it("should render search icon of InputTypeSearch", () => {
        render(<InputTypeSearch />)

        const searchIcon = screen.getByTestId('search-icon')

        expect(searchIcon).toBeInTheDocument()
    });

    it("should render input of InputTypeSearch", () => {
        render(<InputTypeSearch />)

        const input = screen.getByTestId('input')

        expect(input).toBeInTheDocument()
    });

    it("should render input of InputTypeSearch", () => {
        render(<InputTypeSearch />)

        const reloadIcon = screen.getByTestId('reload-icon')

        expect(reloadIcon).toBeInTheDocument()
    });
})