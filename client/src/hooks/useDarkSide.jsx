import { useState, useEffect } from "react";

export default function useDarkSide() {
  const [theme, setTheme] = useState(localStorage.theme);
  const colorTheme = theme === "dark" ? "light" : "dark";
  useEffect(() => {
    const root = window.document.documentElement;
    // console.log(theme)
    theme === "dark"
      ? root.setAttribute("data-theme", "dark")
      : root.setAttribute("data-theme", "light");
    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}
