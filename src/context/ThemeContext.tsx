import React, { ReactNode, createContext } from "react";
import useToggleTheme from "../hooks/useToggleTheme";

type ThemContextProps = {
    children: ReactNode
}

type ThemeContextType = {
   
}

// Create a typed context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);


export const ThemeProvider = ({ children }: ThemContextProps) => {

    const [theme, toggleTheme] = useToggleTheme();

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}