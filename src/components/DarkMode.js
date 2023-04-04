import React, { useState, useEffect } from "react";
import "../pages/PageCss/DarkMode.css";

const DarkMode = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const switchTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <label className="switch" htmlFor="darkMode">
      <input
        type="checkbox"
        id="darkMode"
        onClick={switchTheme}
        checked={theme === "dark"}
      />
      <span className="slider round"></span>
    </label>
  );
};

export default DarkMode;