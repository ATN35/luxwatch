import { Star } from "lucide-react"

export function SocialProofSection() {
  const brands = [
    { name: "Forbes", stat: "4.9/5", detail: "Note moyenne" },
    { name: "GQ", stat: "12 000+", detail: "Clients satisfaits" },
    { name: "Vogue", stat: "98%", detail: "Recommandations" },
    { name: "Bloomberg", stat: "24h", detail: "Livraison express" },
  ]

  return (
    <section
      id="reviews"
      className="scroll-mt-24 py-16 md:py-20 border-y border-[var(--border)] bg-[color-mix(in_oklab,var(--card)_30%,transparent)]"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-10 md:mb-12">
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-[var(--primary)] text-[var(--primary)]" />
            ))}
          </div>
          <p className="text-[var(--muted-foreground)]">
            Plus de <span className="text-[var(--foreground)] font-semibold">12 000 clients</span> nous font confiance
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
          {brands.map((brand, index) => (
            <div key={index} className="text-center space-y-2">
              <div className="text-2xl sm:text-3xl font-bold text-[var(--primary)]">{brand.stat}</div>
              <div className="text-sm text-[var(--muted-foreground)]">{brand.detail}</div>
              <div className="text-xs text-[color-mix(in_oklab,var(--muted-foreground)_60%,transparent)] font-semibold tracking-wider">
                {brand.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
