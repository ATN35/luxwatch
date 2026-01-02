import { Card, CardContent } from "@/components/ui/card"
import { Gem, Package, RotateCcw, Truck } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Gem,
      title: "Matériaux Premium",
      description: "Acier inoxydable 316L et verre saphir anti-rayures pour une durabilité exceptionnelle.",
    },
    {
      icon: Truck,
      title: "Livraison Sécurisée",
      description: "Expédition gratuite avec suivi, emballage luxe et assurance complète incluse.",
    },
    {
      icon: RotateCcw,
      title: "Retour 30 jours",
      description: "Pas satisfait ? Retour gratuit sous 30 jours, sans questions posées.",
    },
    {
      icon: Package,
      title: "Garantie 5 ans",
      description: "Service après-vente premium et garantie constructeur étendue de 5 ans.",
    },
  ]

  return (
    <section id="features" className="scroll-mt-24 py-16 md:py-20 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">
            Pourquoi choisir LUXWATCH ?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[var(--muted-foreground)] max-w-2xl mx-auto">
            Une expérience d&apos;achat exceptionnelle du début à la fin
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="border border-[color-mix(in_oklab,var(--border)_50%,transparent)] bg-[color-mix(in_oklab,var(--card)_50%,transparent)]"
              >
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-[color-mix(in_oklab,var(--primary)_20%,transparent)] rounded-lg p-3 shrink-0">
                      <Icon className="h-6 w-6 text-[var(--primary)]" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-[var(--muted-foreground)] leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
