import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function DetailsPage() {
  return (
    <main className="min-h-screen pt-24 px-4">
      <div className="mx-auto max-w-4xl py-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Voir les détails</h1>
        <p className="text-[var(--muted-foreground)] mb-8">
          Spécifications complètes du chronographe LUXWATCH.
        </p>

        <div className="space-y-6 rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 sm:p-8">
          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-2">Mouvement</h2>
            <p className="text-[var(--muted-foreground)]">Automatique, réserve de marche 42h.</p>
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-2">Boîtier</h2>
            <p className="text-[var(--muted-foreground)]">Acier 316L, verre saphir anti-rayures.</p>
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-2">Étanchéité</h2>
            <p className="text-[var(--muted-foreground)]">300m, usage sportif.</p>
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-2">Édition</h2>
            <p className="text-[var(--muted-foreground)]">Limitée à 500 exemplaires.</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-8">
          <Button variant="outline" asChild>
            <Link href="/">Retour</Link>
          </Button>
          <Button asChild>
            <Link href="/checkout">Commander</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
