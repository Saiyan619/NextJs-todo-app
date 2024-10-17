// app/components/ThemeSwitcher.tsx
"use client";

import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
import {Button} from '@nextui-org/button'; 


export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  return (
    <div className="gap-20">
          {/* The current theme is: {theme} */}
          <Button onClick={() => setTheme('light')} className="mr-5">Light mode</Button>
          <Button onClick={() => setTheme('dark')} className="">dark mode</Button>
    </div>
  )
};