import LogoLight from "../../assets/images/whitenyellow.png";
import LogoDark from "../../assets/images/blackandyellow.png";
import { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext";

export default function ChangeLogo() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (theme === "light") {
    return <img src={LogoDark} alt="MangaSwipe" className="h-[24px] w-[150px]" />;
  } else {
    return <img src={LogoLight} alt="MangaSwipe" className="h-[24px] w-[150px]" />;
  }
}
