import { useTheme } from "../../context/ThemeContext";
import { useState, useEffect } from "react";

export default function ThemeChanger() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (theme === "light") {
    return <i className="fa-solid fa-sun" onClick={() => setTheme("dark")}></i>;
  } else {
    return <i className="fa-solid fa-moon" onClick={() => setTheme("light")}></i>;
  }
}
