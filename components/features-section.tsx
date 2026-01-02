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
    <section className="py-20 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Pourquoi choisir LUXWATCH ?</h2>
          <p className="text-xl text-[var(--muted-foreground)] max-w-2xl mx-auto">
            Une expérience d&apos;achat exceptionnelle du début à la fin
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="border-[color-mix(in_oklab,var(--border)_50%,transparent)] bg-[color-mix(in_oklab,var(--card)_50%,transparent)] hover:bg-[var(--card)] transition-colors">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-[color-mix(in_oklab,var(--primary)_20%,transparent)] rounded-lg p-3 shrink-0">
                      <Icon className="h-6 w-6 text-[var(--primary)]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
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
