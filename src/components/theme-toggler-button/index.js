import React, { useContext, useEffect } from "react";
import { ThemeContext, themes } from "../../contexts/themeContext";
import { Section } from './styled.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";


const ThemeToggleButton = () => {
    const { theme, setTheme } = useContext(ThemeContext)

    localStorage.setItem('background', JSON.stringify(theme))
    
    useEffect(() => {
        const div = document.querySelector('.active')
        let myItem = JSON.parse(localStorage.getItem('background'))
        if (myItem.background === themes.light.background) {
            div.style.left = '2px'
        } else {
            div.style.left = '50px'
        }
        document.querySelector('.theme-toggler-button').addEventListener('click',() => ThemeToggler(themes, setTheme))
    }, [])

    return (
        <Section>
            <button className="theme-toggler-button" onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}>
                <div className="active"></div>
                <FontAwesomeIcon icon={faSun} />
                <FontAwesomeIcon icon={faMoon} />
            </button>
        </Section>
    )
}

function ThemeToggler(themes, setTheme) {
    const div = document.querySelector('.active')
    let myItem = JSON.parse(localStorage.getItem('background'))
    if (myItem.background === themes.light.background) {
        div.style.left = '50px'
        setTheme(themes.light)
    } else {
        div.style.left = '2px'
    }
}

export { ThemeToggleButton };