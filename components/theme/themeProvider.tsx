'use client'

import { ThemeProvider, ThemeProviderProps } from 'next-themes'

function ThemePrvider({ children }: ThemeProviderProps) {
  return <ThemeProvider>{children}</ThemeProvider>
}

export default ThemePrvider
