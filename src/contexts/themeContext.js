import { createContext, useEffect, useState } from "react";

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
    const [ theme, setTheme ] = useState(myItem)

    useEffect(() => {
        if(myItem.background === themes.light.background){
            return
        }else{
            setTheme(themes.dark)
        }
        
    }, [])

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export { ThemesProvider, ThemeContext, themes }