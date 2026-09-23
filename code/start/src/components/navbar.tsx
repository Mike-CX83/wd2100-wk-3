import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isDark, setIsDark] = useState(false)

  // putting "dark" on <html> is what makes the colors in index.css switch
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDark])

  return (
    <header className="w-full border-b bg-card text-card-foreground transition-colors">
      {/* stacks on a phone, sits in a row on bigger screens */}
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 px-4 py-4 sm:flex-row sm:px-6 lg:px-8">
        <h1 className="text-xl font-bold">MyApp</h1>
        <nav className="flex flex-wrap items-center justify-center gap-4" aria-label="Main">
          <Link className="hover:underline" to="/">
            Home
          </Link>
          <Link className="hover:underline" to="/about">
            About
          </Link>
          <Link className="hover:underline" to="/features">
            Features
          </Link>
        </nav>
        <Button
          type="button"
          variant="secondary"
          onClick={() => setIsDark(!isDark)}
          aria-label="Toggle dark mode"
          aria-pressed={isDark}
        >
          {isDark ? "Light Mode" : "Dark Mode"}
        </Button>
      </div>
    </header>
  )
}
