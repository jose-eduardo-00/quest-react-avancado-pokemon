import React, { useContext } from "react";
import { ThemeContext, themes } from "../../contexts/themeContext";


const ThemeToggleButton = () => {
    const { theme, setTheme } = useContext(ThemeContext)
    return <button onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}>Alternar Tema</button>
}

export { ThemeToggleButton };