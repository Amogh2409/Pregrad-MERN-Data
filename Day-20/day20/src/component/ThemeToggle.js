import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext"; 



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