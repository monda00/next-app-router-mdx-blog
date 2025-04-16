'use client'

import { ThemeProvider, ThemeProviderProps } from 'next-themes'

function Providers({ children }: ThemeProviderProps) {
  return <ThemeProvider>{children}</ThemeProvider>
}

export default Providers
