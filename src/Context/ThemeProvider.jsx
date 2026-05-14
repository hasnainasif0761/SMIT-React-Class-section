import React, { createContext, useState } from 'react'

export const ThemeContext = createContext(null)


function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('dark')

    function ChangeTheme() {
        if (theme === 'dark') {
            setTheme('light')
        }
        if (theme === 'light') {
            setTheme('dark')
        }
    }

    return (
        <ThemeContext.Provider value={{ theme, setTheme,ChangeTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider