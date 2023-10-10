import { fireEvent, render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import { ThemeToggleButton } from "./index.js"
import { ThemesProvider} from "../../contexts/themeContext.js"
import * as toggler from './functions.js';


describe("ThemeToggleButton Component", () => {
    function light(){
        localStorage.setItem('background', JSON.stringify('light: {background: "#eeeeee"}'))
    };
    function dark(){
        localStorage.setItem('background', JSON.stringify('dark: {background: "#141f1f"}'))
    };
    
    JSON.parse(localStorage.getItem('background'));
    
    it("should render button", () => {
        light()

        render(
            <ThemesProvider>
                <ThemeToggleButton />
            </ThemesProvider>
        )
        
        const button = screen.getByTestId('button-theme')

        expect(button).toBeInTheDocument()
    });

    it("should have a style of left 2px", () => {
        light()

        render(
            <ThemesProvider>
                <ThemeToggleButton />
            </ThemesProvider>
        )
        
        const button = screen.getByTestId('button-theme-active')

        fireEvent.click(button)

        expect(button).toHaveStyle({left: '2px'})
    });

    it("should have a style of left 50px", () => {
        dark()

        render(
            <ThemesProvider>
                <ThemeToggleButton />
            </ThemesProvider>
        )

        const button = screen.getByTestId('button-theme-active')

        expect(button).toHaveStyle({left: '50px'})
    });

    it("should call onClick with click", () => {
        const spy = jest.spyOn(toggler, 'themeToggler');
        light()

        render(
            <ThemesProvider>
                <ThemeToggleButton />
            </ThemesProvider>
        )
        
        const button = screen.getByTestId('button-theme')

        fireEvent.click(button)

        expect(spy).toHaveBeenCalled()
    });

});
