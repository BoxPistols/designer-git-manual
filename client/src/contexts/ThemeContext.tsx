import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  switchable: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  switchable?: boolean;
}

export function ThemeProvider({
  children,
  defaultTheme = "light",
  switchable = false,
}: ThemeProviderProps) {
  // ライトモードのみに固定
  const [theme] = useState<Theme>("light");

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("dark");
  }, []);

  const toggleTheme = () => {
    // ライトモードのみなので何もしない
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, switchable: false }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
