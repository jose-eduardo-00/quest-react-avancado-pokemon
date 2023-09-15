import React, { useContext, useEffect } from "react";
import { ThemeContext, themes } from "../../contexts/themeContext";
import { Header } from './styled.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

let sunAndMoon = 0

const ThemeToggleButton = () => {
    const { theme, setTheme } = useContext(ThemeContext)

    useEffect(() => {
        document.querySelector('.theme-toggler-button').addEventListener('click', ThemeToggler)
    }, [])

    return (
        <Header>
            <button className="theme-toggler-button" onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}>
                <div className="active"></div>
                <FontAwesomeIcon icon={faSun} />
                <FontAwesomeIcon icon={faMoon} />
            </button>
        </Header>
    )
}

function ThemeToggler() {
    const div = document.querySelector('.active')
    if (sunAndMoon === 0) {
        sunAndMoon++;
        div.style.left = '50px'
    } else {
        sunAndMoon--;
        div.style.left = '2px'
    }
}

export { ThemeToggleButton };