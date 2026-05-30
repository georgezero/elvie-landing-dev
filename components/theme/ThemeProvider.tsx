'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { type ThemeId } from '@/data/elvieContent';

interface ThemeContextValue {
  theme: ThemeId;
  setTheme: (t: ThemeId) => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'clinical',
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeId>('atlas');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('elvie-theme') as ThemeId | null;
    const initial: ThemeId = stored ?? 'atlas';
    setThemeState(initial);
    document.documentElement.setAttribute('data-theme', initial);
    setMounted(true);
  }, []);

  const setTheme = (t: ThemeId) => {
    setThemeState(t);
    localStorage.setItem('elvie-theme', t);
    document.documentElement.setAttribute('data-theme', t);
  };

  if (!mounted) {
    return (
      <div data-theme="clinical" style={{ opacity: 0 }}>
        {children}
      </div>
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
