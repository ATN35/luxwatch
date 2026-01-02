import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] backdrop-blur-lg bg-[color-mix(in_oklab,var(--background)_80%,transparent)]">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <div className="text-xl font-bold tracking-tight">LUXWATCH</div>
        <div className="flex items-center gap-2 sm:gap-4">
          <Button variant="ghost" size="sm" className="text-[color-mix(in_oklab,var(--foreground)_80%,transparent)] hover:text-[var(--foreground)]">
            Caractéristiques
          </Button>
          <Button variant="ghost" size="sm" className="text-[color-mix(in_oklab,var(--foreground)_80%,transparent)] hover:text-[var(--foreground)]">
            Avis
          </Button>
          <Button size="sm" className="gap-2">
            <ShoppingCart className="h-4 w-4" />
            Commander
          </Button>
        </div>
      </div>
    </header>
  )
}
