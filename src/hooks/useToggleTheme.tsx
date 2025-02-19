import { useState } from 'react'


const useToggleTheme = () => {

    const [theme, setTheme] = useState<"light" | "dark">("light");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    return [theme, toggleTheme]
}

export default useToggleTheme