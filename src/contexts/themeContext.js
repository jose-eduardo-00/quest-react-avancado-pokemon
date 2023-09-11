import { createContext, useState } from "react";

const themes = {
    light: {
        background: '#eeeeee'
    },
    dark: {
        background: '#000000'
    }
}

const ThemeContext = createContext({})

const ThemesProvider = (props) => {
    const [ theme, setTheme ] = useState(themes.light)
    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export { ThemesProvider, ThemeContext, themes }