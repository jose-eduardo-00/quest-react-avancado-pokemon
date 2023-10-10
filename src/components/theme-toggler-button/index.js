import React, { useContext, useEffect } from "react";
import { ThemeContext, themes } from "../../contexts/themeContext";
import { Section } from './styled.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { themeToggler } from "./functions.js";


const ThemeToggleButton = () => {
    const { theme, setTheme } = useContext(ThemeContext)

    localStorage.setItem('background', JSON.stringify(theme))
    
    useEffect(() => {
        themeToggler(themes, setTheme)
    })

    return (
        <Section>
            <button 
                className="theme-toggler-button" 
                onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)} 
                data-testid="button-theme"
                >
                <div className="active"  data-testid="button-theme-active"></div>
                <FontAwesomeIcon icon={faSun} />
                <FontAwesomeIcon icon={faMoon} />
            </button>
        </Section>
    )
}

export { ThemeToggleButton };