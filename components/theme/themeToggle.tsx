'use client'

import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '../ui/button'

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      className='cursor-pointer'
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      size={'icon'}
      variant={'outline'}
    >
      <SunIcon className='scale-100 rotate-0 transition-all dark:scale-0 dark:rotate-90' />
      <MoonIcon className='scale-0 rotate-90 transition-all absolute dark:scale-100 dark:rotate-0' />
    </Button>
  )
}

export default ThemeToggle
