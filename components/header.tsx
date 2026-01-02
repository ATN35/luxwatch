"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { ShoppingCart, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const goToReviews = () => {
    setOpen(false)

    if (pathname !== "/") {
      window.location.href = "/#reviews"
      return
    }

    const el = document.getElementById("reviews")
    el?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] backdrop-blur-lg bg-[color-mix(in_oklab,var(--background)_80%,transparent)]">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight">
          LUXWATCH
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={goToReviews}>
            Avis
          </Button>

          <Button variant="outline" size="sm" asChild>
            <Link href="/details">Voir les détails</Link>
          </Button>

          <Button size="sm" className="gap-2" asChild>
            <Link href="/checkout">
              <ShoppingCart className="h-4 w-4" />
              Commander
            </Link>
          </Button>
        </nav>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-2">
          <Button size="sm" className="gap-2" asChild>
            <Link href="/checkout">
              <ShoppingCart className="h-4 w-4" />
              Commander
            </Link>
          </Button>

          <Button
            variant="ghost"
            size="sm"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[var(--border)] bg-[color-mix(in_oklab,var(--background)_92%,transparent)]">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-2">
            <Button variant="ghost" className="justify-start" onClick={goToReviews}>
              Avis
            </Button>

            <Button
              variant="ghost"
              className="justify-start"
              asChild
              onClick={() => setOpen(false)}
            >
              <Link href="/details">Voir les détails</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
