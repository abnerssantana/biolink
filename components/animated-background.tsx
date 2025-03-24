"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

interface AnimatedBackgroundProps {
  className?: string
}

export function AnimatedBackground({ className }: AnimatedBackgroundProps) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Only show the animation after mounting to avoid hydration issues
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className={cn("fixed inset-0 -z-10 overflow-hidden", className)}>
      {/* Gradient background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-background via-background to-background dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 transition-colors duration-500"
        aria-hidden="true"
      />

      {/* Animated shapes */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* Large gradient circle */}
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-primary/20 to-primary/5 dark:from-primary/10 dark:to-primary/5 blur-3xl animate-blob" />

        {/* Secondary gradient circle */}
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-secondary/20 to-secondary/5 dark:from-secondary/10 dark:to-secondary/5 blur-3xl animate-blob animation-delay-2000" />

        {/* Third gradient circle */}
        <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] rounded-full bg-gradient-to-r from-orange-500/10 to-red-500/5 dark:from-orange-500/5 dark:to-red-500/5 blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-[0.02] dark:opacity-[0.03]"
        aria-hidden="true"
      />
    </div>
  )
}

