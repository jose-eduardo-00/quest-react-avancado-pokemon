import { createContext, useState } from "react";

const themes = {
    light: {
        background: '#eeeeee'
    },
    dark: {
        background: '#141f1f'
    }
}

const ThemeContext = createContext({})

const ThemesProvider = (props) => {
    let myItem = JSON.parse(localStorage.getItem('background'))
    if(myItem === null) {
        myItem = themes.light
    } 
    const [ theme, setTheme ] = useState(myItem)

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export { ThemesProvider, ThemeContext, themes }