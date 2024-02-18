'use client'

import { ThemeProvider } from 'next-themes'
import { ThemeProviderProps } from 'next-themes/dist/types'

function ThemePrvider({ children }: ThemeProviderProps) {
  return <ThemeProvider>{children}</ThemeProvider>
}

export default ThemePrvider
