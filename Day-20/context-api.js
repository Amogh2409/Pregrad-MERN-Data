// is a basic way to pass data  - without manually passing the props
// helps in global state like themes auth, user pref, etc

// Context API
// 1. Create Context (createContext)
// 2. Provider (provides the data)
// 3. Consumer (consumes the data)


// when - multiple components need the same data
// props in multiple level

import React, { createContext, useContext, useState } from "react";

// create themecontext

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "lgiht"));
    };


    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};



export default function ThemeToggle() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div style={{
            background: theme === "light" ? "#fff" : "#333",
            color: theme === "light" ? "#000" : "#fff",
            padding: "10px",
            textAlign: "center"
        }}>
            <p>Current Theme: {theme}</p>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );

}