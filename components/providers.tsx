'use client'

import { ThemeProvider } from 'next-themes'
import { ThemeProviderProps } from 'next-themes/dist/types'

function Prviders({ children }: ThemeProviderProps) {
  return <ThemeProvider>{children}</ThemeProvider>
}

export default Prviders
